import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommisionPageRoutingModule } from './commision-routing.module';

import { CommisionPage } from './commision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommisionPageRoutingModule
  ],
  declarations: [CommisionPage]
})
export class CommisionPageModule {}
