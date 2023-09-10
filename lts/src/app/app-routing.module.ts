import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { RegistrationComponent } from './registration/registration.component';
import { TrackleavesComponent } from './trackleaves/trackleaves.component';
import { NewreqComponent } from './newreq/newreq.component';
import { OverviewComponent } from './overview/overview.component';
import { EmployeeeComponent } from './employeee/employeee.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegistrationComponent
  },
  {
    path: 'employeee',
    component:EmployeeeComponent
  },
  {
    path:'applyleave',
    component:ApplyleaveComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
  ,
  {
    path:'trackleaves',
    component:TrackleavesComponent
  },
  {
    path:'manager',
    component:ManagerComponent
  },
  {
    path:'newrequests',
    component:NewreqComponent
  },
  {
    path:'overview',
    component:OverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
