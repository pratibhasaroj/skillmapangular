import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmpserviceService } from '../empservice.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-insertemp',
  templateUrl: './insertemp.component.html',
  styleUrls: ['./insertemp.component.css']
})
export class InsertempComponent implements OnInit {
    empID:number;
    empName:string;
    password:string;
    emailId:string;
    role:string;
    phone:string;
    status:boolean;

  constructor(public regemps:EmpserviceService,public router:Router) { }
  
  ngOnInit() {
   // this.register();
  }
register():void{
  const e=new Employee();
  e.empID=this.empID;
  e.empName=this.empName;
  e.emailId=this.password;
  e.phone=this.phone;
  e.role="manager";
  e.status=false;
  this.regemps.register(e).subscribe(data => {console.log("suscess");this.router.navigate(['/login'])});

}

}
