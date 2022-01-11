import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-viewteethproducts',
  templateUrl: './viewteethproducts.component.html',
  styleUrls: ['./viewteethproducts.component.css']
})
export class ViewteethproductsComponent implements OnInit {

  searchTerm:string;
  teethProducts:Product[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){
   }


  ngOnInit(): void {
    this.dsObj.getTeethData()
     .subscribe(
       data=>{
         this.teethProducts=data;
       },
       err=>{
         console.log("err is",err);
       }
     );
  }

}
