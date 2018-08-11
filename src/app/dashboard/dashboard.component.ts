import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  emplo:Employee[]=[];
  constructor(private emps:EmpserviceService) { }

  ngOnInit() {
    this.getEmps();

  }
  getEmps():void{
    this.emps.getEmps().subscribe(emplo => this.emplo=emplo.slice(0,5));
  }

}
