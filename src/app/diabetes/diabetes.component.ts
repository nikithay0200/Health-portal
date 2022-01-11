import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-diabetes',
  templateUrl: './diabetes.component.html',
  styleUrls: ['./diabetes.component.css']
})
export class DiabetesComponent implements OnInit {

  diabetesProducts:Product[]=[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){
   }

  ngOnInit() {
    this.dsObj.getDiabetesData().subscribe(
      data=>{
        this.diabetesProducts=data;
      },
      err=>{
        console.log("err is",err);
      }
    );
  }

}
