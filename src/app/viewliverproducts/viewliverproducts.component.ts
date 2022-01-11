import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-viewliverproducts',
  templateUrl: './viewliverproducts.component.html',
  styleUrls: ['./viewliverproducts.component.css']
})
export class ViewliverproductsComponent implements OnInit {

  searchTerm:string;
  liverProducts:Product[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){
   }


  ngOnInit(): void {
    this.dsObj.getLiverData()
     .subscribe(
       data=>{
         this.liverProducts=data;
       },
       err=>{
         console.log("err is",err);
       }
     );
  }

}
