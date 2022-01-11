import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-teeth',
  templateUrl: './teeth.component.html',
  styleUrls: ['./teeth.component.css']
})
export class TeethComponent implements OnInit {

  teethProducts:Product[]=[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){

   }

  ngOnInit(): void {
    this.dsObj.getTeethData().subscribe(
      data=>{
        this.teethProducts=data;
      },
      err=>{
        console.log("err is",err);
      }
    );
  }

}
