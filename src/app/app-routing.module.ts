import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';

import {LoginComponent} from './login/login.component';

import {ContactusComponent} from './contactus/contactus.component';
import {ProductsComponent} from './products/Products.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'products',component:ProductsComponent},
  {path:'',redirectTo:"/login",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
