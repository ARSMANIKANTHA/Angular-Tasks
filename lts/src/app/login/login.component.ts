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
  num:Number=-1;
  ngOnInit(): void {
    this.userData=localStorage.getItem("users");
    if(this.userData)
    {
      this.users=JSON.parse(this.userData);
    }
    this.users.forEach(t=>{
      if(t["role"]=="Employee")
      {
        this.emp.unshift(t["email"]);
      }
    })
  }
  vals="/login";
  users:User[]=[];
  emp:String[]=[];
  currentUser:User=
  {
    role:'',
    uname:'',
    email:'',
    pwd:''
  };
  login(val:any)
  {
    const len=this.users.filter(user=> user.email===val.value.email)
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
        const len1=this.users.filter(cuser=> cuser.email===val.value.email)
        console.log(len1);
        this.currentUser=len1[0];
        localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
        console.log(this.emp);
        this.num=this.emp.indexOf(val.value.email);
        if(this.num!=-1)
        {
          this.vals="/employeee"
          // window.location.href='http://localhost:4200/employeee'
        }
        else{
          // window.location.href='http://localhost:4200/manager'
          this.vals="/manager"
        }
      }
    }
    
  }
}
