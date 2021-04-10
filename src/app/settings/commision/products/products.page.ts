import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {ApiService} from 'src/app/services/api.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  productDetail = {
    productname : '',
    productcolor: '',
    productmodel: '',
    productprice:''
  };
  allDetail:any;
  constructor(private camera : Camera,
    private apiserve : ApiService,
    private FireStore: FirestoreService) {
      this.loadDetail();
     }

  options: CameraOptions = {
    quality: 100,
    sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  ngOnInit() {
  }
  
  loadDetail() {
    this.FireStore.find('productdetail').subscribe(res=>{
      this.allDetail=res;
      console.log(this.allDetail);
    })
  }
 Accesscamera(){
  this.apiserve.openCamera();
  }
  AccessGallery(){

    this.apiserve.openGallery();
  }
  addProductDetail(){
    const selectedProduct={
    id:null,
    productname: this.productDetail.productname,
    productcolor: this.productDetail.productcolor,
    productmodel:this.productDetail.productmodel,
    productprice:this.productDetail.productprice
  };
  console.log(this.productDetail);
  this.FireStore.upload(selectedProduct).subscribe(res=>{
    this.allDetail=res;
    this.loadDetail();
})
}
}