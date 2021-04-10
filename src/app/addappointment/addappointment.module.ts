import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddappointmentPageRoutingModule } from './addappointment-routing.module';

import { AddappointmentPage } from './addappointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddappointmentPageRoutingModule
  ],
  declarations: [AddappointmentPage]
})
export class AddappointmentPageModule {}
