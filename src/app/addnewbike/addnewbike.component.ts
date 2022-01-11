import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Mobile } from '../models/mobile.model';

@Component({
  selector: 'app-addnewbike',
  templateUrl: './addnewbike.component.html',
  styleUrls: ['./addnewbike.component.css']
})
export class AddnewbikeComponent implements OnInit {

  constructor(private dsObj:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  
//   bikeModel=new Mobile('','','');
// onSubmitNewMobile(){
//   this.dsObj.createNewBike(this.bikeModel).subscribe(
//     res=>{
//       //navigate to viewbikes
//       this.router.navigateByUrl("products/bikes");
//     },
//     err=>{
//       console.log("error in creating new bike",err);
//     }
//   )
// }
}
