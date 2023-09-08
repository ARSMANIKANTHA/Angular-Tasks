import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
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
    path: 'employee',
    component: EmployeeComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
