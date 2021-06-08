import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Mobile } from 'src/app/models/mobile.model';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  constructor(private dsObj:DataService) { }


  mobiles:Mobile[]=[];
  editMobileindex;
  editMobileObj=new Mobile('','','');
  editMobileStatus:boolean=false;
  searchTerm:string;
  p=1;

  ngOnInit(): void {
    /*this.dsObj.getMobilesData().subscribe(
       res=>{
         this.mobiles=res;
       },
       err=>{
         console.log("err in reading products",err);
       }
    )*/
    this.getUsers();
  }
  getUsers(){
    this.dsObj.getMobilesData().subscribe(
      res=>{
        this.mobiles=res;
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }
  editMobile(mobileObj,ind){
    this.editMobileObj=mobileObj;
    this.editMobileindex=ind;
    this.editMobileStatus=true;
  }
  saveMobile(modifiedMobileObj){
    this.editMobileStatus=false;
    modifiedMobileObj.id=this.editMobileObj["id"];
    modifiedMobileObj.productImage=this.editMobileObj["productImage"];
    this.dsObj.updateMobile(modifiedMobileObj).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log("err is",err);
      }
    )
  }
  deleteMobile(mobileObj){
   
    console.log("mobile to delete",mobileObj.id)
    this.dsObj.deleteMobile(mobileObj.id).subscribe(
      res=>{
        //write getting latest data from API
        this.getUsers();
        alert("Mobile deleted")
      },
      err=>{
        console.log("err in delete mobile",err)
      }
    )
  }
}
