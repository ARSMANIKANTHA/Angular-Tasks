import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  chosenMod:String="";
  logout()
  {
    switch(this.chosenMod)
    {
      case "mod2": window.location.href="http://localhost:4200/login";
                   localStorage.removeItem("currentUser");
    }
  }
  constructor() { }
  UserName:any;
  ngOnInit(): void {
    this.userData=localStorage.getItem("currentUser");
    if(this.userData)
    {
      this.cuser=JSON.parse(this.userData);
    }
    this.UserName=this.cuser['uname'];
  }
  cuser:User={
    role: '',
    uname: '',
    email: '',
    pwd: ''
  };
  userData:any;
}
