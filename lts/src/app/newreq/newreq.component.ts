import { Component, OnInit } from '@angular/core';
import { Leaves } from '../leaves';
@Component({
  selector: 'app-newreq',
  templateUrl: './newreq.component.html',
  styleUrls: ['./newreq.component.css']
})
export class NewreqComponent implements OnInit {
  constructor() { }
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
  }
  cleaves:Leaves[]=[];
  leaveData:any;
  accept(val:any)
  {     
      let res=prompt("Comments:") ;
      this.leaveData=JSON.parse(this.leaveData);
      this.leaveData.forEach((leave:Leaves)=>{
        if(leave["email"]==val.email)
        {
          leave["status"]="Accepted";
          val.status="Accepted";
          val.status=res;
          this.leaveData=JSON.stringify(this.leaveData);
          localStorage.setItem("leaves",this.leaveData)
        }
      })
      this.leaveData=JSON.stringify(this.leaveData);
  }
  reject(val:any)
  {
    let res=prompt("Comments:")
    this.leaveData=JSON.parse(this.leaveData);
    this.leaveData.forEach((leave:Leaves)=>{
      if(leave["email"]==val.email)
      {
        leave["status"]="Rejected";
        val.status="Rejected";
        val.comments=res;
        this.leaveData=JSON.stringify(this.leaveData);
        localStorage.setItem("leaves",this.leaveData)
      }
    })
    this.leaveData=JSON.stringify(this.leaveData);
  }

}
