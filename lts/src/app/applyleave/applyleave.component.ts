import { Component, OnInit } from '@angular/core';
import { Leaves } from '../leaves';
import { User } from '../user';
@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {

  constructor() { }
  leavesData:any;
  userData:any;
  ngOnInit(): void {
      this.leavesData=localStorage.getItem("leaves");
      this.userData=localStorage.getItem("currentUser");
      if(this.leaves)
      {
        this.leaves=JSON.parse(this.leavesData);
      }
      if(this.cuser)
      {
        this.cuser=JSON.parse(this.userData);
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
      start:'',
      end:'',
      email:''
  }
  
  leaves:Leaves[]=[];
  leavedetails(details:any)
  {
    //Adding current user details to the current leave 
      this.cleave=details.value;
      this.cleave["email"]=this.cuser["email"];
      console.log(this.leaves);
      this.leaves.push(this.cleave);
      console.log(this.leaves)
      localStorage.setItem("leaves",JSON.stringify(this.leaves))
  }

}
