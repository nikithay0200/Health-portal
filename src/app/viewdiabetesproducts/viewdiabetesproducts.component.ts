import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-viewdiabetesproducts',
  templateUrl: './viewdiabetesproducts.component.html',
  styleUrls: ['./viewdiabetesproducts.component.css']
})
export class ViewdiabetesproductsComponent implements OnInit {

  searchTerm:string;
  diabetesData:Product[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){
   }

  ngOnInit(): void {
    this.dsObj.getDiabetesData()
     .subscribe(
       data=>{
         this.diabetesData=data;
       },
       err=>{
         console.log("err is",err);
       }
     );
  }

}
