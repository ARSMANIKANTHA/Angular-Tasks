import { Component, OnInit } from '@angular/core';
import { Leaves } from '../leaves';
import { User } from '../user';
@Component({
  selector: 'app-trackleaves',
  templateUrl: './trackleaves.component.html',
  styleUrls: ['./trackleaves.component.css']
})
export class TrackleavesComponent implements OnInit {

  constructor() { }
  //variables for reading data from the local storage
  userData:any;
  leaveData:any;
  username:any;
  //Dummy instances of user and leaves
  cuser:User={role:'',uname:'',email:'',pwd:""};
  leaves:Leaves[]=[];
  cleaves:Leaves[]=[
  ];
  indicator:any;
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
      this.indicator=1;
    }
    this.cleaves=this.leaves.filter(leaven => leaven["email"]===this.cuser["email"]) 
  }
  tempL:any;
  c:any;
  edit(val:Leaves){ 
      console.log(val); 
      this.leaves.forEach(temp=>
      {
        if(temp["reason"]==val["reason"] &&  temp["email"]==val["email"])
        {
        this.c=prompt("Enter a reason:");
        temp["reason"]=this.c;
        }
      })
      this.tempL=JSON.stringify(this.leaves);
      localStorage.setItem("leaves",this.tempL);
  }

  del(val:any)
  { 
    this.leaves.forEach(temp=>
      {
        if(temp["reason"]==val["reason"] &&  temp["email"]==val["email"])
        {
          this.leaves.shift();
          this.cleaves.shift(); 
        }
      })
      this.tempL=JSON.stringify(this.leaves);
      localStorage.setItem("leaves",this.tempL);
  }
}
