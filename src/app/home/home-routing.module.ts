import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'appointment',
    loadChildren: () => import("../menus/appointment/appointment.module").then( m=>m.AppointmentPageModule)
   },
   {
    path: 'staff',
    loadChildren: () => import("../menus/staff/staff.module").then( m=>m.StaffPageModule)
   },
   {
    path: 'business',
    loadChildren: () => import("../menus/business/business.module").then( m=>m.BusinessPageModule)
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
