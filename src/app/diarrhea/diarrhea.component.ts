import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-diarrhea',
  templateUrl: './diarrhea.component.html',
  styleUrls: ['./diarrhea.component.css']
})
export class DiarrheaComponent implements OnInit {

  diarrheaProducts:Product[]=[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){

   }

  ngOnInit(): void {
    this.dsObj.getDiarrheaData().subscribe(
      data=>{
        this.diarrheaProducts=data;
      },
      err=>{
        console.log("err is",err);
      }
    );
  }

}
