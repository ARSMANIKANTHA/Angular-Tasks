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
  //Dummy instances of user and leaves
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
    }
    if(this.leaveData)
    {
      this.leaves=JSON.parse(this.leaveData);
    }
    this.cleaves=this.leaves.filter(leaven => leaven["email"]===this.cuser["email"]) 
    console.log("hhiiii")
    console.log(this.cleaves)
  }
}
