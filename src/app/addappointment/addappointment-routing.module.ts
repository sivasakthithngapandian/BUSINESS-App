import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddappointmentPage } from './addappointment.page';

const routes: Routes = [
  {
    path: '',
    component: AddappointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddappointmentPageRoutingModule {}
