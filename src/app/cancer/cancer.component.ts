import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cancer',
  templateUrl: './cancer.component.html',
  styleUrls: ['./cancer.component.css']
})
export class CancerComponent implements OnInit {

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
