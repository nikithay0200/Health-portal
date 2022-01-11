import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-viewthyroidproducts',
  templateUrl: './viewthyroidproducts.component.html',
  styleUrls: ['./viewthyroidproducts.component.css']
})
export class ViewthyroidproductsComponent implements OnInit {

  searchTerm:string;
  thyroidProducts:Product[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){
   }
  ngOnInit(): void {
    this.dsObj.getThyroidData()
     .subscribe(
       data=>{
         this.thyroidProducts=data;
       },
       err=>{
         console.log("err is",err);
       }
     );
  }

}
