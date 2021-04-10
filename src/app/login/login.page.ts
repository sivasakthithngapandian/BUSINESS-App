import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router'; 
import {WindowService} from '../window.service';
import { environment } from 'src/environments/environment';
import { FirestoreService } from '../services/firestore.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    phone :'', 
    dialcode : '+91'
  }
  mobileno:any;
  windowref:any;
  otp: string;
  otpsend= false;

  constructor(private auth: AngularFireAuth,
              private router : Router,
              private windowservice : WindowService,
              private firestore: FirestoreService) { }

  ngOnInit() {
    this.windowref = this.windowservice.WindowRef;
  }

  ngAfterViewInit(){
    //firebase.default.initializeApp(environment.firebase);
    this.windowref.recaptchaVerifier= new firebase.default.auth.RecaptchaVerifier('recaptcha-container',
    {
      'size' : 'invisible',
       callback: (response) => {
       }
    });
    //console.log(this.windowref.recaptchaVerifier)
    this.windowref.recaptchaVerifier.render();
  }
  
  Otp(){
    this.otpsend = true;
    this.mobileno = this.user.dialcode + this.user.phone;
    this.auth.signInWithPhoneNumber(this.mobileno, this.windowref.recaptchaVerifier)
    .then((confirmationResult) =>{
      this.windowref.confirmationResult = confirmationResult;
    });
  }
  
  verifyotp(users){
      //this.otpsend = false;
      this.mobileno = this.user.dialcode + this.user.phone;
      const client = {
        'id': this.mobileno,
        'mobile': this.mobileno,

        'name': null,
        bussinessname: null,
        phone: this.user.phone,
        Email : null,
        latitude:null,
        longitude:null
      };
      this.windowref.confirmationResult.confirm(this.otp)
      .then(user =>{
        var client1 =firebase.default.auth().currentUser;
       // this.disabledButton =true;
        client.id = client1.uid;
        //this.api.checkClient(client.id).subscribe(client =>{})
    

      this.firestore.createId('users',client).then(res => {          
        this.otpsend = false;
        this.user.phone = '';
        this.router.navigate(['/home']);
       console.log(this.user.phone); 
      });  
  });
}
}
  
