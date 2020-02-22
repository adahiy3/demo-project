import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  public employees =[]
  errormessage: any;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
   this._employeeService.getEmployees().subscribe(data => this.employees=data,error => this.errormessage=error)
  }
}
