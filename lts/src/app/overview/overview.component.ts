import { Component, OnInit } from '@angular/core';
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
