import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-viewgeneralproducts',
  templateUrl: './viewgeneralproducts.component.html',
  styleUrls: ['./viewgeneralproducts.component.css']
})
export class ViewgeneralproductsComponent implements OnInit {

  searchTerm:string;
  generalData:Product[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){

   }

  ngOnInit() {
    this.dsObj.getGeneralData()
     .subscribe(
       data=>{
         this.generalData=data;
       },
       err=>{
         console.log("err is",err);
       }
     );
  }

}
