import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AppointmentPageRoutingModule } from './appointment-routing.module';

import { AppointmentPage } from './appointment.page';
import { CalendarModule } from 'ion2-calendar'
import { RouterModule } from '@angular/router';
import {registerLocaleData} from '@angular/common';
import loacaleEN from '@angular/common/locales/en';
import {AmazingTimePickerModule} from 'amazing-time-picker';

 registerLocaleData(loacaleEN,'en')
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmazingTimePickerModule,
    CalendarModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppointmentPage
      }
    ])
  ],
  declarations: [AppointmentPage]
})
export class AppointmentPageModule {}
