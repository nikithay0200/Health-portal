import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp2';
  
  username;

  constructor(public us:UserService,private router:Router){
    this.username=this.us.username;
    
  }
   
  ngOnInit(): void {
  
  }

  navigatetoproducts(){
    this.router.navigateByUrl('products/general/viewgeneralproducts')
  }
  navigatetovieworadd(){
    this.router.navigate(['/admin/viewproducts'])
  }
  navigatetocart(){
    this.router.navigateByUrl(`userprofile/${this.us.username}/cart`)
  }
  navigatetoprofile()
  {
    this.router.navigateByUrl(`userprofile/${this.us.username}`)
  }
  login(){
    alert("Please login to continue")
    this.router.navigateByUrl("login")
  }
  getUsername(){
    this.username=this.us.username;
    console.log(this.username)
  }
  userLogout()
  {
    localStorage.clear();
    this.us.userLoginStatus=false;
  }
}
