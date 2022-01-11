import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-view-cancer',
  templateUrl: './view-cancer.component.html',
  styleUrls: ['./view-cancer.component.css']
})
export class ViewCancerComponent implements OnInit {

  searchTerm:string;
  cancerProducts:Product[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){
   }

  ngOnInit(): void {
    this.dsObj.getCancerData()
     .subscribe(
       data=>{
         this.cancerProducts=data;
       },
       err=>{
         console.log("err is",err);
       }
     );
  }

}
