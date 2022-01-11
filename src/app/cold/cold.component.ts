import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cold',
  templateUrl: './cold.component.html',
  styleUrls: ['./cold.component.css']
})
export class ColdComponent implements OnInit {

  coldProducts:Product[]=[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){
   }

  ngOnInit(){
    this.dsObj.getColdData().subscribe(
      data=>{
        this.coldProducts=data;
      },
      err=>{
        console.log("err is",err);
      }
    );
  }

}
