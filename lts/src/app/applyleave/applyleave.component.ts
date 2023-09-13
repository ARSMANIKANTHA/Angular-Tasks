import { Component, OnInit } from '@angular/core';
import { Leaves } from '../leaves';
import { User } from '../user';
@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {

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
  leavesData:any;
  userData:any;
  username:any;
  leavesd:Leaves[]=[];
  dleaves:any;
  ngOnInit(): void {
      if(!(localStorage.getItem("leaves")))
      {
          this.dleaves=JSON.stringify(this.leavesd);
          localStorage.setItem("leaves",this.dleaves);
      } 
      this.leavesData=localStorage.getItem("leaves");
      this.userData=localStorage.getItem("currentUser");
      if(this.leaves)
      {
        this.leaves=JSON.parse(this.leavesData);
      }
      if(this.cuser)
      {
        this.cuser=JSON.parse(this.userData);
        this.username=this.cuser["uname"];
      }
  }
  cuser:User={
    role:'',
    uname:'',
    email:'',
    pwd:''
  }
  cleave:Leaves={
      reason:'',
      startdate:'',
      enddate:'',
      email:'',
      status:'',
      comments:''
  }
  
  leaves:Leaves[]=[];
  leavedetails(details:any,startdate:any,enddate:any,reason:any)
  {
      const sdate= new Date(startdate.value);
      const edate = new Date(enddate.value);
      const cdate = new Date();
      
      if(startdate.errors?.['required'] || enddate.errors?.['required'] || reason.errors?.['required'])
      {
        alert("Invalid Details");
      }
      else{
      
        if(cdate>sdate || cdate>edate)
        {
          alert("You can't apply with Previous Days");
        }
          else{
                if(sdate>edate || sdate.getTime()==edate.getTime())
                {
                  alert("Choose correct start and end dates");
                }
                else{
                  this.cleave=details.value;
                  this.cleave["email"]=this.cuser["email"];
                  this.cleave['status']="Pending";
                  this.cleave['comments']='No Comments';
                  this.leaves.push(this.cleave);
                  localStorage.setItem("leaves",JSON.stringify(this.leaves))
                  alert("Leave applied Successfully!!")
                }
          }
      }
  }

}
