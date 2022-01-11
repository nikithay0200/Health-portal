import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private hc:HttpClient) { }

  addThisToCart(productDet):Observable<any>{
    
    return  this.hc.post("/product/addproduct",productDet)
  }
  
  retrieveProducts(username):Observable<any>{
     return this.hc.get(`/product/getproducts/${username}`)
  }
}
