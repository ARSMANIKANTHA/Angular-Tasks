import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegistrationComponent } from './registration/registration.component';
import { TrackleavesComponent } from './trackleaves/trackleaves.component';
import { NewreqComponent } from './newreq/newreq.component';
import { OverviewComponent } from './overview/overview.component';
import { EmployeeeComponent } from './employeee/employeee.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    RegistrationComponent,
    ApplyleaveComponent,
    TrackleavesComponent,
    ManagerComponent,
    NewreqComponent,
    OverviewComponent,
    EmployeeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
