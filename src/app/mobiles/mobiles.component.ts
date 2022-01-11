import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
   
  generalData:Product[]=[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){

   }
   ngOnInit(){
     this.dsObj.getGeneralData().subscribe(
       data=>{
         this.generalData=data;
       },
       err=>{
         console.log("err is",err);
       }
     );
     
   }

}
