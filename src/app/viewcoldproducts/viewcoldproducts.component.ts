import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-viewcoldproducts',
  templateUrl: './viewcoldproducts.component.html',
  styleUrls: ['./viewcoldproducts.component.css']
})
export class ViewcoldproductsComponent implements OnInit {

  searchTerm:string;
  coldData:Product[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){
   }

  ngOnInit(): void {
    this.dsObj.getColdData()
     .subscribe(
       data=>{
         this.coldData=data;
       },
       err=>{
         console.log("err is",err);
       }
     );
  }

}
