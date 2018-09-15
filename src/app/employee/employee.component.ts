import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';
import { IEmployee } from '../Service/iemployee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})

export class EmployeeComponent implements OnInit {

  emph: IEmployee;
  showDeaatils = false;


  constructor(private _empserivce: EmployeeService, private _activaterouter: ActivatedRoute) {

  }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let empid: number = this._activaterouter.snapshot.params['id'];
    this.GetEmployeeById(empid);
  }

  GetEmployeeById(empid: number): void {
    this._empserivce.GetAllEmployeeByID(empid).subscribe((a) => this.emph = a);

  }

  toggleDetails(): Boolean {
    return this.showDeaatils = !this.showDeaatils;
  }
}


