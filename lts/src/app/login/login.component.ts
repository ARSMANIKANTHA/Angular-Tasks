import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  userData:any;
  ngOnInit(): void {
    this.userData=localStorage.getItem("users");
    if(this.userData)
    {
      this.users=JSON.parse(this.userData);
    }
  }
  vals="/login";
  users:User[]=[];
  login(val:any)
  {
    const len=this.users.filter(user=> user.email===val.value.email)
    console.log(val)
    console.log(len)
    if(len.length==0)
    {
      alert("Email Not Found")
    }
    else{
      if(len[0].pwd!==val.value.pwd)
      {
        alert("Invalid password");
      }
      else{
        if(val.value.role=="employee")
        {
          window.location.href='http://localhost:4200/employee'
        }
        else{
          window.location.href='http://localhost:4200/manager'
        }
      }
    }
    
  }
}
