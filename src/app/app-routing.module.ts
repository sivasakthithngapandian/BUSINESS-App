import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {StaffPage} from './menus/staff/staff.page';
import {ClientPage} from './menus/appointment/client/client.page';
import {BookingPageModule} from './settings/booking/booking.module';
import {CommisionPageModule} from './settings/commision/commision.module';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'geomap',
    loadChildren: () => import('./geomap/geomap.module').then( m => m.GeomapPageModule)
  },
  {
    path: 'menus',
    loadChildren: () => import('./menus/menus.module').then( m => m.MenusPageModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./menus/appointment/appointment.module').then( m=>m.AppointmentPageModule)
   },
 
  {
    path: 'business',
    loadChildren: () => import('./menus/business/business.module').then( m => m.BusinessPageModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./menus/inventory/inventory.module').then( m => m.InventoryPageModule)
  },
  {
    path: 'marketing',
    loadChildren: () => import('./menus/marketing/marketing.module').then( m => m.MarketingPageModule)
  }, 
  {
    path: 'profile',
    loadChildren: () => import('./menus/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'sales',
    loadChildren: () => import('./menus/sales/sales.module').then( m => m.SalesPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./menus/reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./menus/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./menus/staff/staff.module').then( m => m.StaffPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./menus/appointment/client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'addappointment',
    loadChildren: () => import('./addappointment/addappointment.module').then( m => m.AddappointmentPageModule)
  },
  {
    path: 'commision',
    loadChildren: () => import('./settings/commision/commision.module').then( m => m.CommisionPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./settings/booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./settings/privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./settings/language/language.module').then( m => m.LanguagePageModule)
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
