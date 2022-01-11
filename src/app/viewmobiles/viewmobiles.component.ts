import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-viewmobiles',
  templateUrl: './viewmobiles.component.html',
  styleUrls: ['./viewmobiles.component.css']
})

export class ViewmobilesComponent implements OnInit {

  searchTerm:string;
  generalData:Product[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){

   }
   ngOnInit(){
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
