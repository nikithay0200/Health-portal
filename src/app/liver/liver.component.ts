import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-liver',
  templateUrl: './liver.component.html',
  styleUrls: ['./liver.component.css']
})
export class LiverComponent implements OnInit {

  liverProducts:Product[]=[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){

   }

  ngOnInit(): void {
    this.dsObj.getLiverData().subscribe(
      data=>{
        this.liverProducts=data;
      },
      err=>{
        console.log("err is",err);
      }
    );
  }

}
