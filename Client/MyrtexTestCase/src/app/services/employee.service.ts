import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateEmployeeRequest } from '../models/create-employee-request.model';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeModel } from '../models/employee.models';
import { EditEmployeeModel } from '../models/edit-employee-request.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  employees: EmployeeModel[] = [];

  createEmployee(model: CreateEmployeeRequest): Observable<CreateEmployeeRequest> {
    return this.http.post<CreateEmployeeRequest>(environment.apiUrl + '/Employee', model)
    .pipe(
      tap(employee => this.employees.push(employee as unknown as EmployeeModel))
    );
  }

  getEmployees() :Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(environment.apiUrl + "/Employee")
    .pipe(
      tap(employees => this.employees = employees)
    );
  }

  getEmployee(id: number) :Observable<CreateEmployeeRequest> {
    return this.http.get<CreateEmployeeRequest>(environment.apiUrl + '/Employee/' + id);
  }

  getEmployeesWithFilter(nameFilter?: string, 
    salaryFilter?: number, 
    dateOfBirthFilter?: string, 
    dateOfEmploymentFilter?: string, 
    departmentFilter?: string,
    sortTerm?: string
    ) :Observable<EmployeeModel[]> {
    let params = new HttpParams();
    if (nameFilter) {
      params = params.append('Name', nameFilter);
    }
    if (salaryFilter) {
      params = params.append('Salary', salaryFilter)
    }
    if(dateOfBirthFilter) {
      params = params.append('DayOfBirth', dateOfBirthFilter);
    }
    if(dateOfEmploymentFilter) {
      params = params.append('DayOfEmployment', dateOfEmploymentFilter);
    }
    if(departmentFilter) {
      params = params.append('Department', departmentFilter);
    }
    if(sortTerm) {
      params = params.append('Sort' ,sortTerm);
    }

    return this.http.get<EmployeeModel[]>(environment.apiUrl + '/Employee/', {params})
    .pipe(
      tap(employees => this.employees = employees)
    );
  }

  deleteEmployee(id: number) :Observable<void> {
    return this.http.delete<void>(environment.apiUrl + '/Employee/' + id)
    .pipe(
      tap(() => {
        this.employees = this.employees.filter((employee) => employee.id !== id)
      })
    )
  }

  changeEmployee(employee: EmployeeModel, newEmployee: EditEmployeeModel) :EmployeeModel {

    const mappedObject: EmployeeModel = {
      id: newEmployee.id,
      name: newEmployee.name,
      dateOfBirth: newEmployee.dateOfBirth !== null ? newEmployee.dateOfBirth : new Date(),
      dateOfEmployment: newEmployee.dateOfEmployment !== null ? newEmployee.dateOfEmployment : new Date(),
      salary: newEmployee.salary,
      department: employee.department
    }
    return mappedObject;
  }

  editEmployee(id: number, model: EditEmployeeModel) :Observable<EditEmployeeModel> {
    return this.http.put<EditEmployeeModel>(environment.apiUrl + '/Employee/' + id, model)
    .pipe(
      tap((res) => {
        const index = this.employees.findIndex((employee) => employee.id === id);
        this.employees[index] = model as unknown as EmployeeModel;
      })
    )
  }
}


