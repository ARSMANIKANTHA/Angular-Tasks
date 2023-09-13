import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  canActivate():boolean
  {
    if(this.cuser.role==="Manager")
    {
      return true
    }
    else{
      this.r.navigateByUrl('/login');
      return false
    }
  }
  cuser:User={
    role:'',
    uname:'',
    email:'',
    pwd:''
  }
  userData:any;
  constructor(private r:Router) {
    this.userData=localStorage.getItem("currentUser")
    if(this.userData)
    {
      this.cuser=JSON.parse(this.userData);
    }
   }
}
