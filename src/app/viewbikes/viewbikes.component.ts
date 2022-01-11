import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-viewbikes',
  templateUrl: './viewbikes.component.html',
  styleUrls: ['./viewbikes.component.css']
})
export class ViewbikesComponent implements OnInit {

  searchTerm:string;
  bikes:Product[];
  //inject obj of dataservice class
   constructor(private dsObj:DataService){
   }

  ngOnInit() {
    this.dsObj.getDiabetesData()
     .subscribe(
       data=>{
         this.bikes=data;
       },
       err=>{
         console.log("err is",err);
       }
     );
     
   
  }

}
