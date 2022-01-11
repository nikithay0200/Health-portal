import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-piles',
  templateUrl: './piles.component.html',
  styleUrls: ['./piles.component.css']
})
export class PilesComponent implements OnInit {

  pilesProducts:Product[]=[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){

   }

  ngOnInit(): void {
    this.dsObj.getPilesData().subscribe(
      data=>{
        this.pilesProducts=data;
      },
      err=>{
        console.log("err is",err);
      }
    );
  }

}
