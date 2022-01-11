import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';

import {LoginComponent} from './login/login.component';

import {ContactusComponent} from './contactus/contactus.component';
import {ProductsComponent} from './products/Products.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { BikesComponent } from './bikes/bikes.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TestComponent } from './test/test.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewmobilesComponent } from './viewmobiles/viewmobiles.component';
import { AddnewmobileComponent } from './addnewmobile/addnewmobile.component';
import { AdminGuard } from './admin.guard';
import { ViewbikesComponent } from './viewbikes/viewbikes.component';
import { AddnewbikeComponent } from './addnewbike/addnewbike.component';
import { ViewCancerComponent } from './view-cancer/view-cancer.component';
import { ViewfeverproductsComponent } from './viewfeverproducts/viewfeverproducts.component';
import { FeverComponent } from './fever/fever.component';
import { GetinfoonfeverComponent } from './getinfoonfever/getinfoonfever.component';
import { GeneralComponent } from './general/general.component';
import { ViewgeneralproductsComponent } from './viewgeneralproducts/viewgeneralproducts.component';
import { DiabetesComponent } from './diabetes/diabetes.component';
import { ViewdiabetesproductsComponent } from './viewdiabetesproducts/viewdiabetesproducts.component';
import { GetinfoondiabetesComponent } from './getinfoondiabetes/getinfoondiabetes.component';
import { CancerComponent } from './cancer/cancer.component';
import { ViewcancerproductsComponent } from './viewcancerproducts/viewcancerproducts.component';
import { GetinfooncancerComponent } from './getinfooncancer/getinfooncancer.component';
import { ColdComponent } from './cold/cold.component';
import { ViewcoldproductsComponent } from './viewcoldproducts/viewcoldproducts.component';
import { GetinfooncoldComponent } from './getinfooncold/getinfooncold.component';
import { PilesComponent } from './piles/piles.component';
import { ViewpilesproductsComponent } from './viewpilesproducts/viewpilesproducts.component';
import { GetinfoonpilesComponent } from './getinfoonpiles/getinfoonpiles.component';
import { HeartComponent } from './heart/heart.component';
import { ViewheartproductsComponent } from './viewheartproducts/viewheartproducts.component';
import { GetinfoonheartComponent } from './getinfoonheart/getinfoonheart.component';
import { ThyroidComponent } from './thyroid/thyroid.component';
import { ViewthyroidproductsComponent } from './viewthyroidproducts/viewthyroidproducts.component';
import { GetinfoonthyroidComponent } from './getinfoonthyroid/getinfoonthyroid.component';
import { LiverComponent } from './liver/liver.component';
import { ViewliverproductsComponent } from './viewliverproducts/viewliverproducts.component';
import { GetinfoonliverComponent } from './getinfoonliver/getinfoonliver.component';
import { TeethComponent } from './teeth/teeth.component';
import { ViewteethproductsComponent } from './viewteethproducts/viewteethproducts.component';
import { GetinfoonteethComponent } from './getinfoonteeth/getinfoonteeth.component';
import { DiarrheaComponent } from './diarrhea/diarrhea.component';
import { GetinfoondiarrheaComponent } from './getinfoondiarrhea/getinfoondiarrhea.component';
import { HighbpComponent } from './highbp/highbp.component';
import { ViewhighbpproductsComponent } from './viewhighbpproducts/viewhighbpproducts.component';
import { GetinfoonhighbpComponent } from './getinfoonhighbp/getinfoonhighbp.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ViewcartComponent } from './viewcart/viewcart.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'userprofile/:username',component:EditprofileComponent},
  {path:'userprofile/:username/cart',component:ViewcartComponent},
  {path:'test',component:TestComponent},
  {path:'test/:id',component:UserdetailsComponent},
  {path:'products',component:ProductsComponent,children:[
    {path:'general', component:GeneralComponent,children:[
      {path:"viewgeneralproducts",component:ViewgeneralproductsComponent},
      {path:"addnewmobile",component:AddnewmobileComponent},
      {path:'',redirectTo:'/products/general/viewgeneralproducts',pathMatch:'full'}
    ]},
    {path:'diabetes',component:DiabetesComponent,children:[
      {path:"viewdiabetesproducts",component:ViewdiabetesproductsComponent},
      {path:"getinfoondiabetes",component:GetinfoondiabetesComponent},
      {path:'',redirectTo:'/products/diabetes/viewdiabetesproducts',pathMatch:'full'}
      
    ]},
    {path:'cancer',component:CancerComponent,children:[
      {path:"viewcancerproducts",component:ViewcancerproductsComponent},
      {path:"getinfooncancer",component:GetinfooncancerComponent},
      {path:'',redirectTo:'/products/cancer/viewcancerproducts',pathMatch:'full'}
    ]},
    {path:'fever',component:FeverComponent,children:[
      {path:"viewfeverproducts",component:ViewfeverproductsComponent},
      {path:"getinfoonfever",component:GetinfoonfeverComponent},
      {path:'',redirectTo:'/products/fever/viewfeverproducts',pathMatch:'full'}
    ]},
    {path:'cold',component:ColdComponent,children:[
      {path:"viewcoldproducts",component:ViewcoldproductsComponent},
      {path:"getinfooncold",component:GetinfooncoldComponent},
      {path:'',redirectTo:'/products/cold/viewcoldproducts',pathMatch:'full'}
    ]},
    {path:'piles',component:PilesComponent,children:[
      {path:"viewpilesproducts",component:ViewpilesproductsComponent},
      {path:"getinfoonpiles",component:GetinfoonpilesComponent},
      {path:'',redirectTo:'/products/piles/viewpilesproducts',pathMatch:'full'}
    ]},
    {path:'heart',component:HeartComponent,children:[
      {path:"viewheartproducts",component:ViewheartproductsComponent},
      {path:"getinfoonheart",component:GetinfoonheartComponent},
      {path:'',redirectTo:'/products/heart/viewheartproducts',pathMatch:'full'}
    ]},
    {path:'thyroid',component:ThyroidComponent,children:[
      {path:"viewthyroidproducts",component:ViewthyroidproductsComponent},
      {path:"getinfoonthyroid",component:GetinfoonthyroidComponent},
      {path:'',redirectTo:'/products/thyroid/viewthyroidproducts',pathMatch:'full'}
    ]},
    {path:'liver',component:LiverComponent,children:[
      {path:"viewliverproducts",component:ViewliverproductsComponent},
      {path:"getinfoonliver",component:GetinfoonliverComponent},
      {path:'',redirectTo:'/products/liver/viewliverproducts',pathMatch:'full'}
    ]},
    {path:'teeth',component:TeethComponent,children:[
      {path:"viewteethproducts",component:ViewteethproductsComponent},
      {path:"getinfoonteeth",component:GetinfoonteethComponent},
      {path:'',redirectTo:'/products/teeth/viewteethproducts',pathMatch:'full'}
    ]},
    {path:'diarrhea',component:DiarrheaComponent,children:[
      {path:"viewdiarrheaproducts",component:ViewdiabetesproductsComponent},
      {path:"getinfoondiarrhea",component:GetinfoondiarrheaComponent},
      {path:'',redirectTo:'/products/diarrhea/viewdiarrheaproducts',pathMatch:'full'}
    ]},
    {path:'highbp',component:HighbpComponent,children:[
      {path:"viewhighbpproducts",component:ViewhighbpproductsComponent},
      {path:"getinfoonhighbp",component:GetinfoonhighbpComponent},
      {path:'',redirectTo:'/products/highbp/viewhighbpproducts',pathMatch:'full'}
    ]},
    {path:'',redirectTo:"/products/general/viewgeneralproducts",pathMatch:"full"},
  ]},
  {path:'',redirectTo:"/home",pathMatch:'full'},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate:[AdminGuard]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
