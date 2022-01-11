import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-fever',
  templateUrl: './fever.component.html',
  styleUrls: ['./fever.component.css']
})
export class FeverComponent implements OnInit {

  feverProducts:Product[]=[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){

   }

  ngOnInit(): void {
    this.dsObj.getFeverData().subscribe(
      data=>{
        this.feverProducts=data;
      },
      err=>{
        console.log("err is",err);
      }
    );
  }

}
