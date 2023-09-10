import { Component, OnInit } from '@angular/core';
import { Leaves } from '../leaves';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() { }
  leaveData:any;
  ngOnInit(): void {
    this.leaveData=localStorage.getItem("leaves");
    if(this.leaveData)
    {
      this.leaveData=JSON.parse(this.leaveData);
    }
  }
  
}
