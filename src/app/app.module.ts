import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { BikesComponent } from './bikes/bikes.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TestComponent } from './test/test.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewmobilesComponent } from './viewmobiles/viewmobiles.component';
import { AddnewmobileComponent } from './addnewmobile/addnewmobile.component';
import {FormsModule} from '@angular/forms';
import { SquarePipe } from './square.pipe';
import { SearchPipe } from './search.pipe';
import { SharedModule } from './shared/shared.module';
import { ViewbikesComponent } from './viewbikes/viewbikes.component';
import { AddnewbikeComponent } from './addnewbike/addnewbike.component';
import { ViewCancerComponent } from './view-cancer/view-cancer.component';
import { ViewfeverproductsComponent } from './viewfeverproducts/viewfeverproducts.component';
import { GetinfoonfeverComponent } from './getinfoonfever/getinfoonfever.component';
import { FeverComponent } from './fever/fever.component';
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
import { ViewdiarrheaproductsComponent } from './viewdiarrheaproducts/viewdiarrheaproducts.component';
import { GetinfoondiarrheaComponent } from './getinfoondiarrhea/getinfoondiarrhea.component';
import { HighbpComponent } from './highbp/highbp.component';
import { ViewhighbpproductsComponent } from './viewhighbpproducts/viewhighbpproducts.component';
import { GetinfoonhighbpComponent } from './getinfoonhighbp/getinfoonhighbp.component';
import { AuthorizationService } from './authorization.service';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FooterComponent,
    ProductDetailsComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    MobilesComponent,
    BikesComponent,
    TelevisionsComponent,
    PagenotfoundComponent,
    TestComponent,
    UserdetailsComponent,
    ViewmobilesComponent,
    AddnewmobileComponent,
    SquarePipe,
    ViewbikesComponent,
    AddnewbikeComponent,
    ViewCancerComponent,
    ViewfeverproductsComponent,
    GetinfoonfeverComponent,
    FeverComponent,
    GeneralComponent,
    ViewgeneralproductsComponent,
    DiabetesComponent,
    ViewdiabetesproductsComponent,
    GetinfoondiabetesComponent,
    CancerComponent,
    ViewcancerproductsComponent,
    GetinfooncancerComponent,
    ColdComponent,
    ViewcoldproductsComponent,
    GetinfooncoldComponent,
    PilesComponent,
    ViewpilesproductsComponent,
    GetinfoonpilesComponent,
    HeartComponent,
    ViewheartproductsComponent,
    GetinfoonheartComponent,
    ThyroidComponent,
    ViewthyroidproductsComponent,
    GetinfoonthyroidComponent,
    LiverComponent,
    ViewliverproductsComponent,
    GetinfoonliverComponent,
    TeethComponent,
    ViewteethproductsComponent,
    GetinfoonteethComponent,
    DiarrheaComponent,
    ViewdiarrheaproductsComponent,
    GetinfoondiarrheaComponent,
    HighbpComponent,
    ViewhighbpproductsComponent,
    GetinfoonhighbpComponent,
    EditprofileComponent,
    ViewcartComponent
  ],
  imports: [
    IvyCarouselModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    NgbModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthorizationService,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
