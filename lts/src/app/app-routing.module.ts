import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminService } from './admin.service';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { AuthService } from './auth.service';
import { EmployeeeComponent } from './employeee/employeee.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { NewreqComponent } from './newreq/newreq.component';
import { OverviewComponent } from './overview/overview.component';
import { RegistrationComponent } from './registration/registration.component';
import { TrackleavesComponent } from './trackleaves/trackleaves.component';

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
    component:EmployeeeComponent,
    canActivate:[AuthService]

  },
  {
    path:'applyleave',
    component:ApplyleaveComponent,
    canActivate:[AuthService]

  },
  {
    path:'login',
    component:LoginComponent
  }
  ,
  {
    path:'trackleaves',
    component:TrackleavesComponent,
    canActivate:[AuthService]

  },
  {
    path:'manager',
    component:ManagerComponent,
    canActivate:[AdminService]

  },
  {
    path:'newrequests',
    component:NewreqComponent,
    canActivate:[AdminService]

  },
  {
    path:'overview',
    component:OverviewComponent,
    canActivate:[AdminService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
