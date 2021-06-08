import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router:Router) {
    console.log("login executed")
   }

  ngOnInit(): void {
  }
  onLogin(ref){
    let userLoginObj=ref.value;
    //if username and pw are admin only navigate to addmin comp
    if(userLoginObj.username!="admin" || userLoginObj.password!="admins")
    {
      alert("Invalid Credentials");
    }
    else{
      //save username in local storage
      localStorage.setItem("username","admin");
      
      this.router.navigateByUrl("/admin");

    }
  
   }

}
