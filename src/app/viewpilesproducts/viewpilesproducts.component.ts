import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-viewpilesproducts',
  templateUrl: './viewpilesproducts.component.html',
  styleUrls: ['./viewpilesproducts.component.css']
})
export class ViewpilesproductsComponent implements OnInit {

  searchTerm:string;
  pilesProducts:Product[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){
   }


  ngOnInit(): void {
    this.dsObj.getPilesData()
     .subscribe(
       data=>{
         this.pilesProducts=data;
       },
       err=>{
         console.log("err is",err);
       }
     );
  }

}
