import { Component, OnInit, Injectable } from '@angular/core';
import { IEmployee } from '../Service/iemployee';
import { EmployeeService } from '../Service/employee.service';

@Component({
    selector: 'app-list-employee',
    templateUrl: './ListEmployee.Component.html',
    styleUrls: ['./ListEmployee.Component.css'],
    providers: [EmployeeService]
})

@Injectable()
export class ListEmployeeComponent implements OnInit {

    emplist: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';
    constructor(private _empserivce: EmployeeService) {

    }

    OnEmployeeCountRadioButtonChanged(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    ngOnInit() {
        this.emplist = this._empserivce.GetMockEmployee();
    }

    GetAllEmployeeCount(): number {
        return this.emplist.length;
    }

    GetMaleEmployeeCount(): number {
        return this.emplist.filter(a => a.gender === 'Male').length;
    }

    GetFeMaleEmployeeCount(): number {
        return this.emplist.filter(a => a.gender === 'FeMale').length;
    }

}
