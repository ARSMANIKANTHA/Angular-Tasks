import { Component, OnInit } from '@angular/core';
import { Leaves } from '../leaves';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {

  constructor() { }
  leavesData:any;
  ngOnInit(): void {
      this.leavesData=localStorage.getItem("leaves");
      if(this.leaves)
      {
        this.leaves=JSON.parse(this.leavesData);
      }
  }
  leaves:Leaves=
      {
      type:'',
      start:'',
      end:''
      }
  leavedetails(details:any)
  {
      this.leaves=details.value;
      console.log(this.leaves)
      localStorage.setItem("leaves",JSON.stringify(this.leaves))
  }

}
