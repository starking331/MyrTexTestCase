import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CreateEmployeeRequest } from 'src/app/models/create-employee-request.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-emloyee-modal',
  templateUrl: './create-emloyee-modal.component.html',
  styleUrls: ['./create-emloyee-modal.component.css']
})
export class CreateEmloyeeModalComponent implements OnDestroy {
  model: CreateEmployeeRequest;
  private createEmployeeSubscribtion?: Subscription;

  updateDepartment(value: string) {
    this.model.departmentId = parseInt(value);
    console.log(this.model)
  }

  constructor(private employeeService: EmployeeService) {
    this.model = {
      name: '',
      departmentId: 0,
      dateOfBirth: null,
      dateOfEmployment: null,
      salary: 0
    };
  }

  createEmployeeSubmit() {
    this.createEmployeeSubscribtion = this.employeeService.createEmployee(this.model)
    .subscribe({
      next: () => {
        alert("Сотрудник успешно создан");
        document.getElementById("employeeCreateClosebutton")?.click();
      },
      error: () => {
        alert("Произошла ошибка.");
      }
    })
  }

  ngOnDestroy(): void {
    this.createEmployeeSubscribtion?.unsubscribe();
  }
}
