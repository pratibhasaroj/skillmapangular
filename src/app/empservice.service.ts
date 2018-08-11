import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';
import {Emp} from './Employeelist';
import {Observable,of} from 'rxjs';
import {MessageService} from './message.service'
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  //constructor(private messageService:MessageService) { }
  constructor(private http: HttpClient,
    private messageService: MessageService){}
  baseUrl: string = 'http://localhost:8080/HelloREST/api/emp'
  getEmps(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);//pipe(catchError(this.handleError('getEmps', [])
  
   
    //return of(Emp);
  }
  register(emp:Employee):Observable<any> {

    return this.http.post<any>(this.baseUrl,emp);
  }
}
