import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ListEmployeeComponent } from './employee/listemployee.component';
import { EmployeecountComponent } from './employee/employeecount.component';
import { EmployeeService } from './Service/employee.service';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'listemployee', component: ListEmployeeComponent },
  { path: 'employee/:id', component: EmployeeComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];


@NgModule({
  declarations: [AppComponent, EmployeeComponent, ListEmployeeComponent, EmployeecountComponent, HomeComponent, PagenotfoundComponent],
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
