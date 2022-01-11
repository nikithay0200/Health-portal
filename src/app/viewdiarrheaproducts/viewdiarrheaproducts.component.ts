import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-viewdiarrheaproducts',
  templateUrl: './viewdiarrheaproducts.component.html',
  styleUrls: ['./viewdiarrheaproducts.component.css']
})
export class ViewdiarrheaproductsComponent implements OnInit {

  searchTerm:string;
  diarrheaProducts:Product[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){
   }


  ngOnInit(): void {
    this.dsObj.getDiarrheaData()
     .subscribe(
       data=>{
         this.diarrheaProducts=data;
       },
       err=>{
         console.log("err is",err);
       }
     );
  }

}
