import { Component } from '@angular/core';
import { CreateEmployeeRequest } from 'src/app/models/create-employee-request.model';

@Component({
  selector: 'app-create-emloyee-modal',
  templateUrl: './create-emloyee-modal.component.html',
  styleUrls: ['./create-emloyee-modal.component.css']
})
export class CreateEmloyeeModalComponent {
  model: CreateEmployeeRequest;

  constructor() {
    this.model = {
      name: '',
      departmentId: 0,
      dateOfBirth: new Date(),
      dateOfEmploymen: new Date(),
      salary: 0
    };
  }

  createEmployeeSubmit() {
    console.log(this.model);
  }
}
