import { Injectable } from '@angular/core';
import { IEmployee } from 'src/app/Service/iemployee';
import { Iemployeeservice } from './iemployeeservice';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class EmployeeService implements Iemployeeservice {

  constructor() { }

  public GetAllEmployee(): IEmployee[] {
    return [
      { Id: 1, name: 'pramod', age: 30, salary: 99000, birtdate: '08/3/1992', gender: 'Male' },
      { Id: 2, name: 'kavita', age: 30, salary: 250000, birtdate: '09/3/1992', gender: 'FeMale' },
      { Id: 3, name: 'sachin', age: 28, salary: 55000, birtdate: '10/3/1992', gender: 'Male' },
      { Id: 4, name: 'deepak', age: 25, salary: 75000, birtdate: '11/3/1992', gender: 'Male' },
      { Id: 5, name: 'ketki', age: 21, salary: 35000, birtdate: '12/3/1992', gender: 'FeMale' },
      { Id: 6, name: 'rushabh', age: 27, salary: 25000, birtdate: '10/3/1992', gender: 'Male' },
      { Id: 7, name: 'Trusha', age: 23, salary: 22000, birtdate: '09/3/1992', gender: 'FeMale' },
      { Id: 8, name: 'Kedar', age: 29, salary: 22000, birtdate: '08/3/1992', gender: 'Male' },
      { Id: 9, name: 'Kranti', age: 20, salary: 22000, birtdate: '07/3/1992', gender: 'FeMale' },
      { Id: 10, name: 'Shaila', age: 15, salary: 220, birtdate: '06/3/1992', gender: 'FeMale' },
      { Id: 11, name: 'James', age: 39, salary: 5000, birtdate: '06/3/1985', gender: 'Male' }

    ];
  }

}
