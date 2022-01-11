import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  constructor(private us:UserService,private router:Router) {
    console.log("login executed")
   }

  ngOnInit(): void {
  }
  onLogin(userCredentials){
    this.us.loginUser(userCredentials).subscribe(
      res=>{
        console.log(res.message)
        if(res.message==="login success"){
          //save token to localstorage
          localStorage.setItem("token",res.token)
          localStorage.setItem("username",res.username)
          localStorage.setItem("userObj",JSON.stringify(res.userObj))
          //update userloginstatus
          this.us.userLoginStatus=true;
          this.us.username=res.username;
          //console.log(userCredentials.password)
          if(res.username=="admin" && userCredentials.password=="admins"){
          this.router.navigateByUrl('admin')
          }
          //navigate to user profile
          else{
          this.router.navigateByUrl('products')
          }
        }
        else{
          alert(res.message)
        }
      },
      err=>{
        
        console.log(err)
        alert("Something went wrong in login")
      }
    )
  }
  // onLogin(ref){
  //   let userLoginObj=ref.value;
  //   //if username and pw are admin only navigate to addmin comp
  //   if(userLoginObj.username!="admin" || userLoginObj.password!="admins")
  //   {
  //     alert("Invalid Credentials");
  //   }
  //   else{
  //     //save username in local storage
  //     localStorage.setItem("username","admin");
      
  //     this.router.navigateByUrl("/admin");

  //   }
  
   //}

}
