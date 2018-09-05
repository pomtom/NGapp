import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-employeecount',
  templateUrl: './employeecount.component.html',
  styleUrls: ['./employeecount.component.css']
})
export class EmployeecountComponent implements OnInit {


  selectedRadioButtonValue: string = 'All';

  @Input()
  All: number;

  @Input()
  Male: number;

  @Input()
  FeMale: number;

  @Output()
  countRadioButtonSelectionChanges: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  OnRadioButtonSelectionChange() {
    this.countRadioButtonSelectionChanges.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue);
  }


}
