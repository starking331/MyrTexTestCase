import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DepartmentModel } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getDepartments() :Observable<DepartmentModel[]>{
    return this.http.get<DepartmentModel[]>(environment.apiUrl + "/Department");
  }
}
