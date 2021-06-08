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
  mobiles:Product[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){

   }
   ngOnInit(){
     this.dsObj.getMobilesData()
     .subscribe(
       data=>{
         this.mobiles=data;
       },
       err=>{
         console.log("err is",err);
       }
     );
     
   }

}
