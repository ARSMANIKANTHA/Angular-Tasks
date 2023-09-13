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
    //Storing all users from the LocalStorage in this.userData
    this.userData=localStorage.getItem("users");
    if(this.userData)
    {
      this.users=JSON.parse(this.userData);
    }
    //Finding employees from total users
    this.users.forEach(t=>{
      if(t["role"]=="Employee")
      {
        this.emp.unshift(t["email"]);
      }
    })
  }//Default page when user open the site
  vals="/login";
  users:User[]=[];
  emp:String[]=[];
  //Dummy currentUser Variable for storing currentUser Details
  currentUser:User=
  {
    role:'',
    uname:'',
    email:'',
    pwd:''
  };
  //Login function for giving access to the user
  login(val:any)
  {
    const len=this.users.filter(user=> user.email===val.value.email)
    //checking whether the email is valid or not
    if(len.length==0)
    {
      alert("Email Not Found")
    }
    else{
      //Checking whether the password is correct 
      if(len[0].pwd!==val.value.pwd)
      {
        alert("Invalid password");
      }
      //Redirecting Employee page or Mangaer page by comparing his or her mail id and role
      else{
        const len1=this.users.filter(cuser=> cuser.email===val.value.email)
        console.log(len1);
        this.currentUser=len1[0];
        localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
        console.log(this.emp);
        //checking whether the mail is in employee data
        //if mail presents the page redirects to employee website
        this.num=this.emp.indexOf(val.value.email);
        if(this.num!=-1)
        {
          window.location.href="http://localhost:4200/employeee"
        }
        //if mail not presents the page redirects to manager website
        else{
            window.location.href="http://localhost:4200/manager"
        }
      }
    }
    
  }
}
