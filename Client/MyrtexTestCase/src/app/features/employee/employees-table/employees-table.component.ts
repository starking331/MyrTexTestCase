import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteEmployeeModalComponent } from '../delete-employee-modal/delete-employee-modal.component';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent {
  Employees: any;


  constructor(private service: EmployeeService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.service.getEmployees().subscribe((data:any) => {
      this.Employees = data;
      console.log(data);
    })
  }

  removeEmployee(id: number) {
  }
}
