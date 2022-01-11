import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-viewheartproducts',
  templateUrl: './viewheartproducts.component.html',
  styleUrls: ['./viewheartproducts.component.css']
})
export class ViewheartproductsComponent implements OnInit {

  searchTerm:string;
  heartProducts:Product[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){
   }

  ngOnInit(): void {
    this.dsObj.getHeartData()
     .subscribe(
       data=>{
         this.heartProducts=data;
       },
       err=>{
         console.log("err is",err);
       }
     );
  }

}
