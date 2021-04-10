import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotcategoryPageRoutingModule } from './notcategory-routing.module';

import { NotcategoryPage } from './notcategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotcategoryPageRoutingModule
  ],
  declarations: [NotcategoryPage]
})
export class NotcategoryPageModule {}
