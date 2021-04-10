import { Injectable } from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {UUID} from 'angular2-uuid';
import {StorageService} from './firestorage.service'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  latitude : any;
  longitude : any;
  address : any;

  constructor(private camera : Camera,
    private storageServ : StorageService) { }
    makeFileIntoBlob(_imagePath, fileName) {
      return new Promise((resolve, reject) => {
        window['resolveLocalFileSystemURL'](_imagePath, (fileEntry) => {
          fileEntry['file']((resFile) => {
            const reader = new FileReader();
            reader.onload = (evt: any) => {
              const imgBlob: any = new Blob([evt.target.result], { type: 'image/jpeg' });
              imgBlob.name = fileName;
              resolve(imgBlob);
            };
            reader.onloadend = (evt: any) => {
              const imgBlob: any = new Blob([evt.target.result], { type: 'image/jpeg' });
              imgBlob.name = fileName;
              resolve(imgBlob);
            };
  
            reader.onerror = (e) => {
  
              reject(e);
            };
  
            reader.readAsArrayBuffer(resFile);
          }, (err) => {
  
            reject(err);
          });
        }, (err) => {
        });
      });
    }
  openCamera() {
      const options: CameraOptions = {
        quality: 95,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };
      this.camera.getPicture(options).then((url) => {
        const name = UUID.UUID();
        // let name = url.split('/');
        // TODO
        this.makeFileIntoBlob(url, name).then(imageData => {
         // this.createLoader('waiting...');
          this.storageServ.uploadContent(imageData, name).then(async success => {
            //await this.loadingCtrl.dismiss();
          //  this.createToast('image uploded', true, 'bottom', 2100);
            console.log('success', success);
            // eslint-disable-next-line @typescript-eslint/camelcase
           // this.loggedInUser.profile_img = success.url;
          }).catch(async err => {
            //await this.loadingCtrl.dismiss();
            //this.createToast(`${err}`, true, 'bottom', 2100);
            console.log('err', err);
          });
        });
      }).catch(err => { console.log('err', err); });
    }
  
    openGallery() {
      const options: CameraOptions = {
        quality: 95,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
      };
      this.camera.getPicture(options).then((url) => {
        const name = UUID.UUID();
  
        this.makeFileIntoBlob(url, name).then(imageData => {
  
         // this.createLoader('waiting...');
          this.storageServ.uploadContent(imageData, name).then(async success => {
          //  await this.loadingCtrl.dismiss();
           // this.createToast('image uploded', true, 'bottom', 2100);
            console.log('success', success);
            // eslint-disable-next-line @typescript-eslint/camelcase
           //this.loggedInUser.profile_img = success.url;
          }).catch(async err => {
          //  await this.loadingCtrl.dismiss();
           // this.createToast(`${err}`, true, 'bottom', 2100);
            console.log('err', err);
          });
        });
      }).catch(err => {
        console.log('errrrr', err);
      });
    }
  
  }
  