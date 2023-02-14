import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'tshirt', loadChildren: () => import('./pages/tshirt/tshirt.module').then(m => m.TshirtModule) }, { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) }, { path: 'bill', loadChildren: () => import('./pages/bill/bill.module').then(m => m.BillModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
