import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import {HttpClient} from '@angular/common/http';
import { MobilesComponent } from './mobiles/mobiles.component';
import {Observable} from 'rxjs';
import { Mobile } from './models/mobile.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }
  
  getMobilesData():Observable<Mobile[]>{
    //http get request
   return this.hc.get<Mobile[]>("http://localhost:3000/mobiles/");
  }

  //to save/create new mobile 
  createNewMobile(mobileObj):Observable<any>{
    return this.hc.post("http://localhost:3000/mobiles/",mobileObj);
  }

  //to update mobile details
  updateMobile(modifiedMobileObj):Observable<any>{
    return this.hc.put("http://localhost:3000/mobiles/"+modifiedMobileObj.id,modifiedMobileObj);
  }
  //delete mobile
  deleteMobile(id):Observable<any>{
    console.log("id is ",id)
    return this.hc.delete("http://localhost:3000/mobiles/"+id)
  }

  //to check login status
  userLoginStatus():boolean{
    if(localStorage.getItem("username")==null){
      return false;
    }
    else{
      return true;
    }
  }

  //logout
  userLogout(){
    localStorage.clear();
  }
}
