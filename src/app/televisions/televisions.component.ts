import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit {

  cancerProducts:Product[]=[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){

   }

  ngOnInit(): void {
    this.dsObj.getCancerData().subscribe(
      data=>{
        this.cancerProducts=data;
      },
      err=>{
        console.log("err is",err);
      }
    );
  }

}
