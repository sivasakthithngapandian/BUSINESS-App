import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotcategoryPage } from './notcategory.page';

const routes: Routes = [
  {
    path: '',
    component: NotcategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotcategoryPageRoutingModule {}
