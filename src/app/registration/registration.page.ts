import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
/*import { Geolocation } from '@ionic-native/geolocation/ngx';
import{plugins} from '@capacitor/cli';*/
import { ApiService } from '../services/api.service';
import {FirestoreService} from '../services/firestore.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  scrollTo=null

  public user ={
          phone:'',
          dialcode:'+91',
           businessname :'',
           name :'',
           Email :'',

           latitude :'',
           longitude : '',
           address :'',

         };

  constructor( private router : Router, 
    //private geolocation :Geolocation,
                private ngfire:AngularFireAuth,
               private ngfiredata: AngularFireDatabase,
               private api : ApiService,
               private firestore: FirestoreService,
                ) { }
    ngOnInit(){
    }
    register(){
      this.user.latitude = this.api.latitude;
      this.user.longitude = this.api.longitude;
      this.user.address = this.api.address;
      const client ={
        id:this.user.dialcode+7639077071,
        name : this.user.name,
        businessname: this.user.businessname,
        Email : this.user.Email,
        latitude: this.user.latitude,
        longitude : this.user.longitude,
      };
      this.firestore.update('users',client.id,client).then(res =>{
       // this.router.navigate(['/registration']);
       this.router.navigate(['/profile'])

      });

    }
    logout(){
      this.ngfire.signOut().then(res => {
          this.router.navigate(['/login'])
      
    })
  }
  skip(){
    this.router.navigate(['/home'])
  }
  scrollListVisible(){
    console.log('Scroll To:',this.scrollTo);
    
  }
getGeolocation(){
  this.router.navigate(['/geomap']);
}
}