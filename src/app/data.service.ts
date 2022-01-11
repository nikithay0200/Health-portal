import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import {HttpClient} from '@angular/common/http';
import { MobilesComponent } from './mobiles/mobiles.component';
import {Observable} from 'rxjs';
import { Mobile } from './models/mobile.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {
   category:string;
  constructor(private hc:HttpClient) { }
  
  getGeneralData():Observable<Product[]>{
    //http get request
   this.category="general";
   return this.hc.get<Product[]>("http://localhost:8000/general/");
  }
  
  getDiabetesData():Observable<Product[]>{
    this.category="diabetes";
    return this.hc.get<Product[]>("http://localhost:8000/diabetes/");
  }

  getCancerData():Observable<Product[]>{
    this.category="cancer";
    return this.hc.get<Product[]>("http://localhost:8000/cancer/");
  }
  getFeverData():Observable<Product[]>{
    this.category="fever";
    return this.hc.get<Product[]>("http://localhost:8000/fever/");
  }
  getColdData():Observable<Product[]>{
    this.category="cold";
    return this.hc.get<Product[]>("http://localhost:8000/cold/");
  }
  getPilesData():Observable<Product[]>{
    this.category="piles";
    return this.hc.get<Product[]>("http://localhost:8000/piles/");
  }
  getHeartData():Observable<Product[]>{
    this.category="heart";
    return this.hc.get<Product[]>("http://localhost:8000/heart/");
  }
  getThyroidData():Observable<Product[]>{
    this.category="thyroid";
    return this.hc.get<Product[]>("http://localhost:8000/thyroid/");
  }
  getLiverData():Observable<Product[]>{
    this.category="liver";
    return this.hc.get<Product[]>("http://localhost:8000/liver/");
  }
  getTeethData():Observable<Product[]>{
    this.category="teeth";
    return this.hc.get<Product[]>("http://localhost:8000/teeth/");
  }
  getDiarrheaData():Observable<Product[]>{
    this.category="diarrhea";
    return this.hc.get<Product[]>("http://localhost:8000/diarrhea/");
  }
  getHighbpData():Observable<Product[]>{
    this.category="highbp";
    return this.hc.get<Product[]>("http://localhost:8000/highbp/");
  } 
  createNewGeneral(prodObj):Observable<any>{
   return this.hc.post("http://localhost:8000/general/",prodObj);
   }
  createNewDiabetic(prodObj):Observable<any>{
    return this.hc.post("http://localhost:8000/diabetes/",prodObj);
  }
  createNewCancer(prodObj):Observable<any>{
    return this.hc.post("http://localhost:8000/cancer/",prodObj);
    }
   createNewFever(prodObj):Observable<any>{
     return this.hc.post("http://localhost:8000/fever/",prodObj);
   }
   createNewCold(prodObj):Observable<any>{
    return this.hc.post("http://localhost:8000/cold/",prodObj);
    }
   createNewPiles(prodObj):Observable<any>{
     return this.hc.post("http://localhost:8000/piles/",prodObj);
   }
   createNewHeart(prodObj):Observable<any>{
    return this.hc.post("http://localhost:8000/heart/",prodObj);
  }
  createNewThyroid(prodObj):Observable<any>{
    return this.hc.post("http://localhost:8000/thyroid/",prodObj);
  }
  createNewLiver(prodObj):Observable<any>{
   return this.hc.post("http://localhost:8000/liver/",prodObj);
 }
 createNewTeeth(prodObj):Observable<any>{
  return this.hc.post("http://localhost:8000/teeth/",prodObj);
}
createNewDiarrhea(prodObj):Observable<any>{
  return this.hc.post("http://localhost:8000/diarrhea/",prodObj);
}
createNewHighbp(prodObj):Observable<any>{
 
 return this.hc.post("http://localhost:8000/highbp/",prodObj);
}
//to update product details
updateGeneral(modifiedMobileObj):Observable<any>{
  return this.hc.put("http://localhost:8000/general/"+modifiedMobileObj.id,modifiedMobileObj);
}
updateDiabetes(modifiedMobileObj):Observable<any>{
  return this.hc.put("http://localhost:8000/diabetes/"+modifiedMobileObj.id,modifiedMobileObj);
}
updateCancer(modifiedMobileObj):Observable<any>{
  return this.hc.put("http://localhost:8000/cancer/"+modifiedMobileObj.id,modifiedMobileObj);
}
updateFever(modifiedMobileObj):Observable<any>{
  return this.hc.put("http://localhost:8000/fever/"+modifiedMobileObj.id,modifiedMobileObj);
}
updateCold(modifiedMobileObj):Observable<any>{
  return this.hc.put("http://localhost:8000/cold/"+modifiedMobileObj.id,modifiedMobileObj);
}
updatePiles(modifiedMobileObj):Observable<any>{
  return this.hc.put("http://localhost:8000/piles/"+modifiedMobileObj.id,modifiedMobileObj);
}
updateHeart(modifiedMobileObj):Observable<any>{
  return this.hc.put("http://localhost:8000/heart/"+modifiedMobileObj.id,modifiedMobileObj);
}
updateThyroid(modifiedMobileObj):Observable<any>{
  return this.hc.put("http://localhost:8000/thyroid/"+modifiedMobileObj.id,modifiedMobileObj);
}
updateLiver(modifiedMobileObj):Observable<any>{
  return this.hc.put("http://localhost:8000/liver/"+modifiedMobileObj.id,modifiedMobileObj);
}
updateTeeth(modifiedMobileObj):Observable<any>{
  return this.hc.put("http://localhost:8000/teeth/"+modifiedMobileObj.id,modifiedMobileObj);
}
updateDiarrhea(modifiedMobileObj):Observable<any>{
  return this.hc.put("http://localhost:8000/diarrhea/"+modifiedMobileObj.id,modifiedMobileObj);
}
updateHighbp(modifiedMobileObj):Observable<any>{
  return this.hc.put("http://localhost:8000/highbp/"+modifiedMobileObj.id,modifiedMobileObj);
}

  //delete mobile
  deleteGeneral(id):Observable<any>{
    console.log("id is ",id)
    return this.hc.delete("http://localhost:8000/general/"+id)
  }
  deleteDiabetes(id):Observable<any>{
    console.log("id is ",id)
    return this.hc.delete("http://localhost:8000/diabetes/"+id)
  }
  deleteCancer(id):Observable<any>{
    console.log("id is ",id)
    return this.hc.delete("http://localhost:8000/cancer/"+id)
  }
  deleteFever(id):Observable<any>{
    console.log("id is ",id)
    return this.hc.delete("http://localhost:8000/fever/"+id)
  }
  deleteCold(id):Observable<any>{
    console.log("id is ",id)
    return this.hc.delete("http://localhost:8000/cold/"+id)
  }
  deleteThyroid(id):Observable<any>{
    console.log("id is ",id)
    return this.hc.delete("http://localhost:8000/thyroid/"+id)
  }
  deletePiles(id):Observable<any>{
    console.log("id is ",id)
    return this.hc.delete("http://localhost:8000/piles/"+id)
  }
  deleteHeart(id):Observable<any>{
    console.log("id is ",id)
    return this.hc.delete("http://localhost:8000/heart/"+id)
  }
  deleteLiver(id):Observable<any>{
    console.log("id is ",id)
    return this.hc.delete("http://localhost:8000/liver/"+id)
  }
  
  deleteTeeth(id):Observable<any>{
    console.log("id is ",id)
    return this.hc.delete("http://localhost:8000/teeth/"+id)
  }
  deleteDiarrhea(id):Observable<any>{
    console.log("id is ",id)
    return this.hc.delete("http://localhost:8000/diarrhea/"+id)
  }
  deleteHighbp(id):Observable<any>{
    console.log("id is ",id)
    return this.hc.delete("http://localhost:8000/highbp/"+id)
  }
  //to check login status
  userLoginStatus():boolean{
    if(localStorage.getItem("username")==null){
      return false;
    }
    else{
      return true;
    }
  }

  //logout
  userLogout(){
    localStorage.clear();
  }
}
