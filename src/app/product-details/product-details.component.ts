import { Component, Input,EventEmitter,Output } from '@angular/core';
import { Product } from '../models/product.model';
import { Productcat } from '../models/productcat.model';
import { DataService } from '../data.service';
import {ProductService} from '../product.service'
import {UserService} from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  constructor(private dsObj:DataService,private us:UserService,private ps:ProductService,private router:Router){}

  category:string=this.dsObj.category;
  //productDet:Productcat;
  productDet=new Productcat('','','','','',0)
  //to receive data from parent as input
  @Input() productObj:Product;
  
  //create custom event
  @Output() myEvent=new EventEmitter();
  
  

  addtoCart(category,productTitle){
    if(!this.us.userLoginStatus)
    {
      alert("Please login to buy")
      this.router.navigateByUrl("login");
    }
    else{
    this.productDet.type=category;
    this.productDet.description=this.productObj.description;
    this.productDet.productImage=this.productObj.productImage;
    this.productDet.productTitle=this.productObj.productTitle;
    this.productDet.username=localStorage.getItem("username");
     //emit data to parent
     this.myEvent.emit(productTitle);
     this.ps.addThisToCart(this.productDet).subscribe(
      res=>{
        if(res.message==="Product added"){
          alert("Product added")
          //navigate to login component
          //this.router.navigateByUrl("/login")
        }
        else{
          alert(res.message)
        }
      },
      err=>{
        console.log(err)
        alert("Something went wrong in adding product to cart")
      }
    )
  }
}
}
