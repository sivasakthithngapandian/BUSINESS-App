import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommisionPage } from './commision.page';

const routes: Routes = [
  {
    path: '',
    component: CommisionPage
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'others',
    loadChildren: () => import('./others/others.module').then( m => m.OthersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommisionPageRoutingModule {}
