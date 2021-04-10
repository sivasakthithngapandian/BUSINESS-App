import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeomapPageRoutingModule } from './geomap-routing.module';

import { GeomapPage } from './geomap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeomapPageRoutingModule
  ],
  declarations: [GeomapPage]
})
export class GeomapPageModule {}
