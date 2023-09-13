import { Component, OnInit } from '@angular/core';
import { Leaves } from '../leaves';
import { User } from '../user';
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
  value:any;
  cleaves:Leaves[]=[
  ];

  chosenMod:String="";
  logout()
  {
    switch(this.chosenMod)
    {
      case "mod2": window.location.href="http://localhost:4200/login";
                   localStorage.removeItem("currentUser");
    }
  } 
  tleaves=true;
  ngOnInit(): void {
    this.userData=localStorage.getItem("currentUser");
    this.leaveData=localStorage.getItem("leaves");
    if(this.userData)
    {
      //parsing user data into cuser data
        this.cuser=JSON.parse(this.userData);
        this.username=this.cuser["uname"];
    }
    if(this.leaveData)
    {
      this.leaves=JSON.parse(this.leaveData);
      this.tleaves=false;
    }
    this.cleaves=this.leaves.filter(leaven => leaven["email"]===this.cuser["email"]) 
  }

  
}
