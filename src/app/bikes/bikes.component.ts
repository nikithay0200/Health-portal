import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  
  bikes:Product[]=[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){

   }

  ngOnInit() {
    this.dsObj.getDiabetesData().subscribe(
      data=>{
        this.bikes=data;
      },
      err=>{
        console.log("err is",err);
      }
    );
    
  }
  

}
