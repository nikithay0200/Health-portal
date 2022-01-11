import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productcat } from 'src/app/models/productcat.model';
import { DataService } from '../../data.service';
import { Prods } from '../../models/prods.model';
import {Mobile} from '../../models/mobile.model'

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  constructor(private dsObj:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  category
  prodModel=new Prods('','','','');
  productModel=new Mobile('','','');
  onSubmitNewProduct(){
  this.category=this.prodModel.type;
  if(this.category=="general"){
  delete this.prodModel.type
  //this.productModel=this.prodModel
  this.dsObj.createNewGeneral(this.prodModel).subscribe(
    res=>{
      this.router.navigateByUrl("products/general");
    },
    err=>{
      console.log("error in creating new general product",err);
    }
  )
  }
  if(this.category=="diabetes"){
    delete this.prodModel.type
    this.dsObj.createNewDiabetic(this.prodModel).subscribe(
      res=>{
        this.router.navigateByUrl("products/diabetes");
      },
      err=>{
        console.log("error in creating new diabetes product",err);
      }
    )
    }
    if(this.category=="cancer"){
      delete this.prodModel.type
      this.dsObj.createNewCancer(this.prodModel).subscribe(
        res=>{
          this.router.navigateByUrl("products/cancer");
        },
        err=>{
          console.log("error in creating new cancer product",err);
        }
      )
      }
    if(this.category=="fever"){
      delete this.prodModel.type
      this.dsObj.createNewFever(this.prodModel).subscribe(
        res=>{
          this.router.navigateByUrl("products/fever");
        },
        err=>{
          console.log("error in creating new fever product",err);
        }
      )
    }
    if(this.category=="cold"){
      delete this.prodModel.type
      this.dsObj.createNewCold(this.prodModel).subscribe(
        res=>{
        this.router.navigateByUrl("products/cold");
        },
        err=>{
          console.log("error in creating new cold product",err);
        }
      )
    }
    if(this.category=="piles"){
      delete this.prodModel.type
      this.dsObj.createNewPiles(this.prodModel).subscribe(
        res=>{
          this.router.navigateByUrl("products/piles");
        },
        err=>{
          console.log("error in creating new piles product",err);
        }
      )
    }
    if(this.category=="heart"){
      delete this.prodModel.type
      this.dsObj.createNewHeart(this.prodModel).subscribe(
        res=>{
          this.router.navigateByUrl("products/heart");
        },
        err=>{
          console.log("error in creating new heart product",err);
        }
      )
    }
    if(this.category=="thyroid"){
      delete this.prodModel.type
      this.dsObj.createNewThyroid(this.prodModel).subscribe(
        res=>{
          this.router.navigateByUrl("products/thyroid");
        },
        err=>{
          console.log("error in creating new thyroid product",err);
        }
      )
    }
    if(this.category=="highbp"){
      delete this.prodModel.type
      this.dsObj.createNewHighbp(this.prodModel).subscribe(
        res=>{
          this.router.navigateByUrl("products/highbp");
        },
        err=>{
          console.log("error in creating new highbp product",err);
        }
      )
    }
    if(this.category=="liver"){
      delete this.prodModel.type
      this.dsObj.createNewLiver(this.prodModel).subscribe(
        res=>{
          this.router.navigateByUrl("products/liver");
        },
        err=>{
          console.log("error in creating new liver product",err);
        }
      )
    }
    if(this.category=="teeth"){
      delete this.prodModel.type
      this.dsObj.createNewTeeth(this.prodModel).subscribe(
        res=>{
          this.router.navigateByUrl("products/teeth");
        },
        err=>{
          console.log("error in creating new teeth product",err);
        }
      )
    }
    if(this.category=="diarrhea"){
      delete this.prodModel.type
      this.dsObj.createNewDiarrhea(this.prodModel).subscribe(
        res=>{
          this.router.navigateByUrl("products/diarrhea");
        },
        err=>{
          console.log("error in creating new diarrhea product",err);
        }
      )
    }
}
}
