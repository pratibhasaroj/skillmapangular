import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
//import {Emp} from '../Employeelist';

import { EmpserviceService } from '../empservice.service';
@Component({
  selector: 'app-loginapp',
  templateUrl: './loginapp.component.html',
  styleUrls: ['./loginapp.component.css']
})
export class LoginappComponent implements OnInit {
//employees=Emp;
emplo:Employee[];
 //selectedEmp:Employee;
// empsr=this.emps.getEmps();
  constructor(private emps:EmpserviceService) { }
getEmps():void{
  this.emps.getEmps().subscribe(emplo => this.emplo=emplo)
}
  ngOnInit() {
    //console.log(this.emps.getEmps());
    this.getEmps();
  }
//onSelect(employee:Employee):void{
  //this.selectedEmp = employee;
}

