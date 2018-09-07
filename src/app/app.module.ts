import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ListEmployeeComponent } from './employee/listemployee.component';
import { EmployeecountComponent } from './employee/employeecount.component';
import { EmployeeService } from './Service/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent, ListEmployeeComponent, EmployeecountComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
