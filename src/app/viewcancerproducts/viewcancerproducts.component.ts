import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-viewcancerproducts',
  templateUrl: './viewcancerproducts.component.html',
  styleUrls: ['./viewcancerproducts.component.css']
})
export class ViewcancerproductsComponent implements OnInit {

  searchTerm:string;
  cancerData:Product[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){
   }

  ngOnInit(): void {
    this.dsObj.getCancerData()
     .subscribe(
       data=>{
         this.cancerData=data;
       },
       err=>{
         console.log("err is",err);
       }
     );
     
  }

}
