import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name = 'Pramod Lawate';
  image = 'http://www.pragimtech.com/Images/Logo.JPG';
  address = 'London';
  age = 25;
  phone = 79794651861583;

  showDeaatils = false;


  displayTwoWayDataBinding = 'Tom';

  constructor() {
  }

  ngOnInit() {

  }

  toggleDetails(): Boolean {
    return this.showDeaatils = !this.showDeaatils;
  }
}
