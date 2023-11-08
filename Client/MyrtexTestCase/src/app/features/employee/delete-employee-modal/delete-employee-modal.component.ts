import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CreateEmployeeRequest } from 'src/app/models/create-employee-request.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-delete-employee-modal',
  templateUrl: './delete-employee-modal.component.html',
  styleUrls: ['./delete-employee-modal.component.css']
})
export class DeleteEmployeeModalComponent implements OnDestroy {
  @Input() employeeId: number = 0;
  employee: CreateEmployeeRequest | undefined;
  private employeeSubscribtion?: Subscription;
  
  constructor(public activeModal: NgbActiveModal, private employeesService: EmployeeService) {}
  
  ngOnInit(): void {
    this.employeeSubscribtion = this.employeesService.getEmployee(this.employeeId)
    .subscribe({
      next: (employee) => {
        this.employee = employee;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  deleteEmployee() {
    this.employeesService.deleteEmployee(this.employeeId)
    .subscribe({
      next: () => {
        alert('Сотрудник успешно удалён');
        this.activeModal.dismiss()
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  ngOnDestroy(): void {
    this.employeeSubscribtion?.unsubscribe();
  }
}
