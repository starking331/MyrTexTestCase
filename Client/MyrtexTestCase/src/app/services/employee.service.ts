import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateEmployeeRequest } from '../models/create-employee-request.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  createEmployee(model: CreateEmployeeRequest): Observable<void> {
    return this.http.post<void>(environment.apiUrl + '/Employee', model);
  }

  getEmployees() :Observable<any[]>{
    return this.http.get<any>(environment.apiUrl + "/Employee");
  }
}


