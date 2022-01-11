import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-viewfeverproducts',
  templateUrl: './viewfeverproducts.component.html',
  styleUrls: ['./viewfeverproducts.component.css']
})
export class ViewfeverproductsComponent implements OnInit {

  searchTerm:string;
  feverProducts:Product[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){
   }

  ngOnInit(): void {
    this.dsObj.getFeverData()
     .subscribe(
       data=>{
         this.feverProducts=data;
       },
       err=>{
         console.log("err is",err);
       }
     );
  }

}
