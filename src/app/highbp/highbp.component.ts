import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-highbp',
  templateUrl: './highbp.component.html',
  styleUrls: ['./highbp.component.css']
})
export class HighbpComponent implements OnInit {

  highbpProducts:Product[]=[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){

   }

  ngOnInit(): void {
    this.dsObj.getHighbpData().subscribe(
      data=>{
        this.highbpProducts=data;
      },
      err=>{
        console.log("err is",err);
      }
    );
  }

}
