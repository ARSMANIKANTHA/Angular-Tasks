import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
