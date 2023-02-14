import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TshirtComponent } from './tshirt.component';

const routes: Routes = [{ path: '', component: TshirtComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TshirtRoutingModule { }
