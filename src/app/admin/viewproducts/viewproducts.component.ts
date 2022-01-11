import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Mobile } from 'src/app/models/mobile.model';
import $ from "jquery"
@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  constructor(private dsObj:DataService) { }


  products:Mobile[]=[];
  editProductindex;
  editProductObj=new Mobile('','','');
  editProductStatus:boolean=false;
  searchTerm:string;
  p=1;
  delprod;
  ngOnInit(): void {
    $(document).ready(function () {
  
      $('ul.nav > li')
              .click(function (e) {
          $('ul.nav > li')
              .removeClass('active');
          $(this).addClass('active');
      });
  });
    this.getProducts();
  }
  getProducts(){
    this.delprod="general"
    this.dsObj.getGeneralData().subscribe(
      res=>{
        this.products=res;
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }
  getDiabetesProd(){
    this.delprod="diabetes"
    this.dsObj.getDiabetesData().subscribe(
      res=>{
        this.products=res;
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }
  getCancerData(){
    this.delprod="cancer"
    this.dsObj.getCancerData().subscribe(
      res=>{
        this.products=res;
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }
  getFeverData(){
    this.delprod="fever"
    this.dsObj.getFeverData().subscribe(
      res=>{
        this.products=res;
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }
  getColdData(){
    this.delprod="cold"
    this.dsObj.getColdData().subscribe(
      res=>{
        this.products=res;
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }
  getPilesData(){
    this.delprod="piles"
    this.dsObj.getPilesData().subscribe(
      res=>{
        this.products=res;
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }
  getHeartData(){
    this.delprod="heart"
    this.dsObj.getHeartData().subscribe(
      res=>{
        this.products=res;
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }
  getThyroidData(){
    this.delprod="thyroid"
    this.dsObj.getThyroidData().subscribe(
      res=>{
        this.products=res;
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }
  getLiverData(){
    this.delprod="liver"
    this.dsObj.getLiverData().subscribe(
      res=>{
        this.products=res;
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }
  getTeethData(){
    this.delprod="teeth"
    this.dsObj.getTeethData().subscribe(
      res=>{
        this.products=res;
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }
  getDiarrheaData(){
    this.delprod="diarrhea"
    this.dsObj.getDiarrheaData().subscribe(
      res=>{
        this.products=res;
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }
  getHighbpData(){
    this.delprod="highbp"
    this.dsObj.getHighbpData().subscribe(
      res=>{
        this.products=res;
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }
  editProduct(mobileObj,ind){
    this.editProductObj=mobileObj;
    this.editProductindex=ind;
    this.editProductStatus=true;
  }
  saveProduct(modifiedProductObj){
    this.editProductStatus=false;
    modifiedProductObj.id=this.editProductObj["id"];
    modifiedProductObj.productImage=this.editProductObj["productImage"];
    if(this.delprod=="general"){
    this.dsObj.updateGeneral(modifiedProductObj).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log("err is",err);
      }
    )
    }
    if(this.delprod=="cancer"){
      this.dsObj.updateCancer(modifiedProductObj).subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log("err is",err);
        }
      )
    }
    if(this.delprod=="diabetes"){
      this.dsObj.updateDiabetes(modifiedProductObj).subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log("err is",err);
        }
      )
    }
    if(this.delprod=="fever"){
      this.dsObj.updateFever(modifiedProductObj).subscribe(
      res=>{
      console.log(res);
      },
      err=>{
        console.log("err is",err);
      }
     )
    }
    if(this.delprod=="cold"){
      this.dsObj.updateCold(modifiedProductObj).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log("err is",err);
      }
      )
    }
    if(this.delprod=="piles"){
      this.dsObj.updatePiles(modifiedProductObj).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log("err is",err);
      }
      )
    }
    if(this.delprod=="heart"){
      this.dsObj.updateHeart(modifiedProductObj).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log("err is",err);
      }
     )
    }
    if(this.delprod=="thyroid"){
      this.dsObj.updateThyroid(modifiedProductObj).subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log("err is",err);
        }
      )
      }
    if(this.delprod=="liver"){
      this.dsObj.updateLiver(modifiedProductObj).subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log("err is",err);
        }
      )
    }
    if(this.delprod=="teeth"){
      this.dsObj.updateTeeth(modifiedProductObj).subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log("err is",err);
        }
      )
    }
    if(this.delprod=="diarrhea"){
      this.dsObj.updateDiarrhea(modifiedProductObj).subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log("err is",err);
        }
      )
    }
    if(this.delprod=="highbp"){
      this.dsObj.updateHighbp(modifiedProductObj).subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log("err is",err);
        }
      )
      }
  }
  deleteProduct(productObj){
    console.log("product to delete",productObj.id)
    if(this.delprod=="general"){
    this.dsObj.deleteGeneral(productObj.id).subscribe(
      res=>{
        //write getting latest data from API
        this.getProducts();
        alert("Product deleted")
      },
      err=>{
        console.log("err in delete product",err)
      }
    )
  }
  if(this.delprod=="cancer"){
    this.dsObj.deleteCancer(productObj.id).subscribe(
      res=>{
        //write getting latest data from API
        this.getCancerData();
        alert("Product deleted")
      },
      err=>{
        console.log("err in delete product",err)
      }
    )
  }
  if(this.delprod=="fever"){
    this.dsObj.deleteFever(productObj.id).subscribe(
      res=>{
        //write getting latest data from API
        this.getFeverData();
        alert("Product deleted")
      },
      err=>{
        console.log("err in delete product",err)
      }
    )
  }
  if(this.delprod=="diabetes"){
    this.dsObj.deleteDiabetes(productObj.id).subscribe(
      res=>{
        //write getting latest data from API
        this.getDiabetesProd();
        alert("Product deleted")
      },
      err=>{
        console.log("err in delete product",err)
      }
    )
  }
  if(this.delprod=="cold"){
    this.dsObj.deleteCold(productObj.id).subscribe(
      res=>{
        //write getting latest data from API
        this.getColdData();
        alert("Product deleted")
      },
      err=>{
        console.log("err in delete product",err)
      }
    )
  }
  if(this.delprod=="piles"){
    this.dsObj.deletePiles(productObj.id).subscribe(
      res=>{
        //write getting latest data from API
        this.getPilesData();
        alert("Product deleted")
      },
      err=>{
        console.log("err in delete product",err)
      }
    )
  }
  if(this.delprod=="heart"){
    this.dsObj.deleteHeart(productObj.id).subscribe(
      res=>{
        //write getting latest data from API
        this.getHeartData();
        alert("Product deleted")
      },
      err=>{
        console.log("err in delete product",err)
      }
    )
  }
  if(this.delprod=="thyroid"){
    this.dsObj.deleteThyroid(productObj.id).subscribe(
      res=>{
        //write getting latest data from API
        this.getThyroidData();
        alert("Product deleted")
      },
      err=>{
        console.log("err in delete product",err)
      }
    )
  }
  if(this.delprod=="diarrhea"){
    this.dsObj.deleteDiarrhea(productObj.id).subscribe(
      res=>{
        //write getting latest data from API
        this.getDiarrheaData();
        alert("Product deleted")
      },
      err=>{
        console.log("err in delete product",err)
      }
    )
  }
  if(this.delprod=="liver"){
    this.dsObj.deleteLiver(productObj.id).subscribe(
      res=>{
        //write getting latest data from API
        this.getLiverData();
        alert("Product deleted")
      },
      err=>{
        console.log("err in delete product",err)
      }
    )
  }
  if(this.delprod=="teeth"){
    this.dsObj.deleteTeeth(productObj.id).subscribe(
      res=>{
        //write getting latest data from API
        this.getTeethData();
        alert("Product deleted")
      },
      err=>{
        console.log("err in delete product",err)
      }
    )
  }
  if(this.delprod=="highbp"){
    this.dsObj.deleteHighbp(productObj.id).subscribe(
      res=>{
        //write getting latest data from API
        this.getHighbpData();
        alert("Product deleted")
      },
      err=>{
        console.log("err in delete product",err)
      }
    )
  }
}
  
}
