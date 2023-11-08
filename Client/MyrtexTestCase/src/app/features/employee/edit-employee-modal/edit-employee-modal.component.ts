import { DatePipe } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { EditEmployeeModel } from 'src/app/models/edit-employee-request.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee-modal',
  templateUrl: './edit-employee-modal.component.html',
  styleUrls: ['./edit-employee-modal.component.css']
})
export class EditEmployeeModalComponent implements OnDestroy {
  @Input() employeeId: number = 0;
  model: EditEmployeeModel;
  private employeeSubscribtion?: Subscription;
  departmentIdOfModel: number = 0;
  private editEmployeeSubscribtion?: Subscription;

  constructor(private employeesService: EmployeeService, public activeModal: NgbActiveModal,private datePipe: DatePipe) {
    this.model = {
      id: 0,
      name: '',
      departmentId: 0,
      dateOfBirth: null,
      dateOfEmployment: null,
      salary: 0
    };
  }

  get formattedDateOfBirth() {
    return this.datePipe.transform(this.model.dateOfBirth, 'yyyy-MM-dd');
  }

  get formattedDateOfEmployment() {
    return this.datePipe.transform(this.model.dateOfEmployment, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.employeeSubscribtion = this.employeesService.getEmployee(this.employeeId)
    .subscribe({
      next: (employee) => {
        this.departmentIdOfModel = employee.departmentId;
        console.log(this.departmentIdOfModel)
        this.model = {
          id: this.employeeId,
          name: employee.name,
          departmentId: employee.departmentId,
          dateOfBirth: employee.dateOfBirth,
          dateOfEmployment: employee.dateOfEmployment,
          salary: employee.salary
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  updateDepartment(value: string) {
    this.model.departmentId = parseInt(value);
    console.log(this.model)
  }

  editEmployeeSubmit() {
    console.log(this.model)
    this.editEmployeeSubscribtion = this.employeesService.editEmployee(this.employeeId, this.model)
    .subscribe({
      next: () => {
        alert("Сотрудник успешно изменён");
      },
      error: () => {
        alert("Произошла ошибка.");
      }
    })
  }

  ngOnDestroy(): void {
    this.employeeSubscribtion?.unsubscribe();
  }
}
