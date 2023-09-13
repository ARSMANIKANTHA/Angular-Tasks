import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }
  userData:any;
  disable:any;
  ngOnInit(): void {
    //Getting all availble users from localstorage 
    this.userData = localStorage.getItem("users");
    if(this.userData)
    {
      this.users=JSON.parse(this.userData);
    }
  }
  users:User[]=[];
  user:User=
    {
      role:'',
      uname:'',
      email:'',
      pwd:''
    }
  ;
  register(val:any,name:any,email:any,pass:any)
  {
    const vals = this.users.filter(user=>user.email===val.value.email);    
    if(pass.errors?.['minlength'] || name.errors?.['pattern'] || email.errors?.['pattern'])
    {
      alert("Invalid Format");
    }
    else{
      if(!vals.length)
      {
        alert("Registration Successful!!");
        window.location.href="http://localhost:4200/login"
        this.users.push(val.value);
        localStorage.setItem("users",JSON.stringify(this.users)); 
      }
      //Checking whether the user already presents or not
      else{
        alert("User already exists");
      }
    }
    }
    
}
