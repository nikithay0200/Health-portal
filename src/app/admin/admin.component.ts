import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public us:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  adminlogout(){
    localStorage.clear();
    this.us.userLoginStatus=false;
    this.router.navigate(['/login'])
  }
}
