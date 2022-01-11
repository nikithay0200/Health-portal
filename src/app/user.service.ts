import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   userLoginStatus=false;
   username;
  //inject http client object
  constructor(public hc:HttpClient) { }

  createUser(userObj):Observable<any>{
    return  this.hc.post("/user/createuser",userObj)
  }

  loginUser(credentials):Observable<any>{
    return  this.hc.post("/user/login",credentials)
  }


  userLogout(){
    localStorage.clear();
    this.userLoginStatus=false;
  }

  getUser(username):Observable<any>{
      return this.hc.get(`/user/getuser/${username}`)
  }

  deleteUser(username):Observable<any>{
    return this.hc.delete(`/user/deleteuser/${username}`)
  }

  updateUser(userObj):Observable<any>{
    return this.hc.put(`/user/updateuser/${userObj.oldusername}`,userObj)
  }
}