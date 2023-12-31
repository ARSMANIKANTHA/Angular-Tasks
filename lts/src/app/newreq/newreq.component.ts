import { Component, OnInit } from '@angular/core';
import { Leaves } from '../leaves';
import { User } from '../user';
@Component({
  selector: 'app-newreq',
  templateUrl: './newreq.component.html',
  styleUrls: ['./newreq.component.css']
})
export class NewreqComponent implements OnInit {
  constructor() { }
  UserName:any;
  cuser:User={
    role: '',
    uname: '',
    email: '',
    pwd: ''
  };
  userData:any;
  ngOnInit(): void {
    this.leaveData=localStorage.getItem("leaves");
    if(this.leaveData)
    {
      this.leaveData=JSON.parse(this.leaveData);
    }
    this.leaveData.forEach((leave: Leaves)=>{
      if(leave["status"]==="Pending")
      {
        this.cleaves.push(leave);
      }
    })
    this.leaveData=JSON.stringify(this.leaveData);

    //for finding current user
    this.userData=localStorage.getItem("currentUser");
    if(this.userData)
    {
      this.cuser=JSON.parse(this.userData);
    }
    this.UserName=this.cuser['uname'];
  }
  cleaves:Leaves[]=[];
  leaveData:any;

  accept(val:any)
  {     
      let res=prompt("Comments:");
      this.leaveData=localStorage.getItem("leaves");
      if(this.leaveData)
      {
        this.leaveData=JSON.parse(this.leaveData);
        console.log(this.leaveData);
      }
      this.leaveData.forEach((leave:Leaves)=>{
        if(leave["email"]==val.email)
        {
          leave["status"]="Accepted";
          val.status="Accepted";
          val.comments=res;
          leave["comments"]=val.comments;
          this.leaveData=JSON.stringify(this.leaveData);
          localStorage.setItem("leaves",this.leaveData)
        }
      })
      this.leaveData=JSON.stringify(this.leaveData);
  }
  reject(val:any)
  {
    let res1=prompt("Comments:");
      this.leaveData=localStorage.getItem("leaves");
      if(this.leaveData)
      {
        this.leaveData=JSON.parse(this.leaveData);
        console.log(this.leaveData);
      }
      this.leaveData.forEach((leave:Leaves)=>{
        if(leave["email"]==val.email)
        {
          leave["status"]="Rejected";
          val.status="Rejected";
          val.comments=res1;
          leave["comments"]=val.comments;
          this.leaveData=JSON.stringify(this.leaveData);
          localStorage.setItem("leaves",this.leaveData)
        }
      })
      this.leaveData=JSON.stringify(this.leaveData);
  }
  chosenMod:String="";
  logout()
  {
    switch(this.chosenMod)
    {
      case "mod2": window.location.href="http://localhost:4200/login";
                   localStorage.removeItem("currentUser");
    }
  }

}
