import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit ,OnDestroy{

  constructor() { 
    console.log("register executed");
  }

  ngOnInit(): void {
  }
  ngOnDestroy(){
    console.log("login is destroyed");
  }
}
