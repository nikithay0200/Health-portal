import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from '../product.service'
import { toArray } from 'rxjs/operators';
import { Productcat } from '../models/productcat.model';
@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {

  productsincart:Productcat[] =[]
  username
  cost
  prize
  total:number=0
  constructor(private ps:ProductService,private router:Router) { }
  
  ngOnInit(): void {
    
    this.username=localStorage.getItem("username")
     this.ps.retrieveProducts(this.username).subscribe(
      products=>{
        this.productsincart=products["message"]
        console.log(this.productsincart)
      },
      err=>{
        console.log("err is",err);
      }
     );
     
    }
    // function () {
    //   function showcart() {
    //     for(let i=0;i<this.productsincart.length;i++){
    //          this.cost=this.productsincart[i].description
    //          this.prize=(this.cost).substr(3,8);
    //          this.total+=parseFloat(this.prize);
    //        }    
    //     console.log(this.total);
    //   }
    
    //   document.getElementById('show').addEventListener('click', showcart, true);
    // }
    show(){
      for(let i=0;i<this.productsincart.length;i++){
        this.cost=this.productsincart[i].description
        this.prize=(this.cost).substr(3,8);
        this.total+=(this.productsincart[i].quantity*parseFloat(this.prize));
     }  
     var x = document.getElementById('myDIV');
  if (x.style.visibility === 'hidden') {
    x.style.visibility = 'visible';
  }  
        //console.log(this.total)
        
    }
    alert(){
      alert("Your order will be delivered to registered address."+"\n"+"Payment mode:CASH ON DELIVERY")
    }


}
