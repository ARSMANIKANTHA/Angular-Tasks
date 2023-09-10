import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Leaves } from '../leaves';
@Component({
  selector: 'app-employeee',
  templateUrl: './employeee.component.html',
  styleUrls: ['./employeee.component.css']
})
export class EmployeeeComponent implements OnInit {

  currentUser: User = {
    role: '',
    uname: '',
    email: '',
    pwd: ''
  };
  username: any;
  cuserData: any;
  cleaveData:Leaves[]=[
    {
      reason:'',
      startdate:'',
      enddate:'',
      email:'',
      status:'',
      comments:''
    }
  ]
  leavesData:any;
  constructor() { }
  userData:any;
  leaveData:any;
  cuser:User={role:'',uname:'',email:'',pwd:""};
  leaves:Leaves[]=[];
  cleaves:Leaves[]=[
  ];
  ngOnInit(): void {
    this.userData=localStorage.getItem("currentUser");
    this.leaveData=localStorage.getItem("leaves");
    if(this.userData)
    {
        this.cuser=JSON.parse(this.userData);
        this.username=this.cuser["uname"];
    }
    if(this.leaveData)
    {
      this.leaves=JSON.parse(this.leaveData);
    }
    this.cleaves=this.leaves.filter(leaven => leaven["email"]===this.cuser["email"]) 
  }
}
