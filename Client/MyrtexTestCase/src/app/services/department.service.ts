import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }
  readonly ApiUrl = "https://localhost:7210/api"

  getDepartments() :Observable<any[]>{
    return this.http.get<any>(this.ApiUrl + "/Department");
  }
}
