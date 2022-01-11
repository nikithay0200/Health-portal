import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { SharedModule } from '../shared/shared.module';
import { AddproductsComponent } from './addproducts/addproducts.component';


@NgModule({
  declarations: [
    AdminComponent,
    ViewproductsComponent,
    AddproductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class AdminModule { }
