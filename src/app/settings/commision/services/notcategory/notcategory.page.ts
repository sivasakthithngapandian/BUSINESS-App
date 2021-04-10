import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notcategory',
  templateUrl: './notcategory.page.html',
  styleUrls: ['./notcategory.page.scss'],
})
export class NotcategoryPage implements OnInit {
  public notcategory={
    categories : '',
    // bcategories : ''
  }
  
  constructor(public Firestore: FirestoreService,
    private router: Router) {

   }
   ngOnInit() {
  }
  add(){
    const getcategories ={
      id : '+917639077071',
      categories : this.notcategory,
      // bcategories : this.inventory
    }
    this.Firestore.update('booking',getcategories.id, getcategories).then(res =>{
     
      //  this.router.navigate(['/registration']);
      //this.router.navigate(['/home'])
   });
    console.log("categories",this.notcategory)
  }

  back(){
    this.router.navigate(['/home'])
  }

}

 


