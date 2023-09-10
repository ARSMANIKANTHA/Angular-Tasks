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
  ngOnInit(): void {
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
  register(val:any)
  {
    console.log(val);
    const vals = this.users.filter(user=>user.email===val.value.email);
    if(!vals.length)
    {
      this.users.push(val.value);
      localStorage.setItem("users",JSON.stringify(this.users)); 
    }
    else{
      alert("User already exists");
    }
  }

}
