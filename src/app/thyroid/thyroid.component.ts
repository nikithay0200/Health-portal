import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-thyroid',
  templateUrl: './thyroid.component.html',
  styleUrls: ['./thyroid.component.css']
})
export class ThyroidComponent implements OnInit {

  thyroidProducts:Product[]=[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){

   }

  ngOnInit(): void {
    this.dsObj.getThyroidData().subscribe(
      data=>{
        this.thyroidProducts=data;
      },
      err=>{
        console.log("err is",err);
      }
    );
  }

}
