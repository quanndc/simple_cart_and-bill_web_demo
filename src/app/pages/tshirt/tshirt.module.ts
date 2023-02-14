import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TshirtRoutingModule } from './tshirt-routing.module';
import { TshirtComponent } from './tshirt.component';


@NgModule({
  declarations: [
    TshirtComponent
  ],
  imports: [
    CommonModule,
    TshirtRoutingModule
  ]
})
export class TshirtModule { }
