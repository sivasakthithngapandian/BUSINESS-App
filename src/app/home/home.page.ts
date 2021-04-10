import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import{AppointmentPageModule}from '../menus/appointment/appointment.module';
import {BusinessPageModule} from '../menus/business/business.module';
import {ProfilePageModule} from '../menus/profile/profile.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ImageArray: any=[]

  constructor(private ngfireAuth : AngularFireAuth,
              private router : Router,
              public navCtrl:NavController) { 
                
               /* this.ImageArray=[{'image':'../assets/photos/images.jpg'},
                {'image':'../assets/photos/images2.jpg'},
                {'image':'../assets/photos/images3.jpg'},
                {'image':'../assets/photos/images5.jpg'},
                {'image':'../assets/photos/images7.jpg'}]*/
              }
              
              
  Logout() {
    this.ngfireAuth.signOut().then(use => {
      this.router.navigate(['/login']);
  })

}
  register(){
    this.router.navigate(['/registration']);
  }
  
}
