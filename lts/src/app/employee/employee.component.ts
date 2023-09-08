import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  currentUser:User={
    role:'',
    uname:'',
    email:'',
    pwd:''
  }
  username:any;
  cuserData:any;

  ngOnInit(): void {
    this.cuserData=localStorage.getItem("currentUser");
    if(this.cuserData)
    {
      this.currentUser=JSON.parse(this.cuserData);
      this.username=this.currentUser['uname'];
    }
  }
  
  constructor() {}

}
