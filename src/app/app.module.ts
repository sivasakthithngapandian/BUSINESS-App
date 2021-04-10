import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ApiService } from '../app/services/api.service';
import { FirestoreService } from '../app/services/firestore.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from 'src/environments/environment';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { AmazingTimePickerModule } from 'amazing-time-picker'; 
import {FormsModule} from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {StorageService} from './services/firestorage.service'
import { AngularFireStorageModule } from '@angular/fire/storage';
//import {FireStore} from './credentials';


@NgModule({
  declarations: [AppComponent], 
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp
    (environment.firebase), 
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ApiService,
  Geolocation,
  FormsModule,
    Camera,
    StorageService,
  FirestoreService],
  bootstrap: [AppComponent], 
})
export class AppModule {}
