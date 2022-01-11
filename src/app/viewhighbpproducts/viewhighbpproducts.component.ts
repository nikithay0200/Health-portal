import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-viewhighbpproducts',
  templateUrl: './viewhighbpproducts.component.html',
  styleUrls: ['./viewhighbpproducts.component.css']
})
export class ViewhighbpproductsComponent implements OnInit {

  searchTerm:string;
  highbpProducts:Product[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){
   }


  ngOnInit(): void {
    this.dsObj.getHighbpData()
     .subscribe(
       data=>{
         this.highbpProducts=data;
       },
       err=>{
         console.log("err is",err);
       }
     );
      }
}
