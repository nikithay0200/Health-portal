import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service'

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  username;
  constructor(private us:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  onEdit(userObj){
    //console.log(userObj)
    this.us.updateUser(userObj).subscribe(
      res=>{
        if(res.message==="User modified"){
          alert("User modified")
          //navigate to login component
            this.router.navigateByUrl("/login")
        }
        else{
          alert(res.message)
        }
      },
      err=>{
        console.log(err)
        alert("Something went wrong in user creation")
      }
    )
  }
  
  onDelete(username)
  {
    this.us.deleteUser(username).subscribe(
      res=>{
        if(res.message==="User modified"){
          alert("User deleted")
          //navigate to login component
            this.router.navigateByUrl("/login")
        }
        else{
          alert(res.message)
        }
      },
      err=>{
        console.log(err)
        alert("Something went wrong in user creation")
      }
    )
  }

  deletemine(){
    if(confirm("Are you sure you want to delete your account?"))
    {
      this.username=this.us.username;
      this.onDelete(this.username);
      this.us.userLoginStatus=false;
    }
  }
}
