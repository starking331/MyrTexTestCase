import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/services/employee.service';
import { DeleteEmployeeModalComponent } from '../delete-employee-modal/delete-employee-modal.component';
import { EditEmployeeModalComponent } from '../edit-employee-modal/edit-employee-modal.component';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent {
  Employees: any;
  departmentFilter: string = '';
  nameFilter: string = '';
  salaryFilter: number = 0;
  dateOfBirthFilter: string = '';
  dateOfEmploymentFilter: string = '';
  sortTerm: string = '';
  sorts = [
    { value: "", name: "Department" },
    { value: "", name: "Name" },
    { value: "", name: "DateOfBirth" },
    { value: "", name: "DateOfEmployment" },
    { value: "", name: "Salary" }
  ];

  constructor(public service: EmployeeService, private modalService: NgbModal) { }

  ngOnInit(): void {
      this.service.getEmployeesWithFilter(this.nameFilter)
      .subscribe(employees => this.Employees = employees);
  }

  sortAsc(sortTerm: string) {
    const index = this.sorts.findIndex((s) => s.name === sortTerm);
    this.sorts[index].value = 'asc';
    this.sortTerm = sortTerm + ' asc';
    this.getEmployeesWithFilter()
  }

  sortDesc(sortTerm: string) {
    const index = this.sorts.findIndex((s) => s.name === sortTerm);
    this.sorts[index].value = 'desc';
    this.sortTerm = sortTerm + ' desc'
    this.getEmployeesWithFilter();
  }

  getSortTerm() {
    for (let index = 0; index < this.sorts.length; index++) {
      const element = this.sorts[index];
      if(this.sorts[index].value !== '') {
        this.sortTerm += this.sorts[index].name + ' ' + this.sorts[index].value + ', '
      }  
    }
    console.log(this.sortTerm)
  }

  onReset() {
    this.nameFilter = '';
    this.salaryFilter = 0;
    this.dateOfBirthFilter = '';
    this.dateOfEmploymentFilter = '';
    this.departmentFilter = '';
    this.sorts = [
      { value: "", name: "Department" },
      { value: "", name: "Name" },
      { value: "", name: "DateOfBirth" },
      { value: "", name: "DateOfEmployment" },
      { value: "", name: "Salary" }
    ];

    this.getEmployeesWithFilter();
  }

  getEmployeesWithFilter() {
    this.getSortTerm()
    this.service.getEmployeesWithFilter(this.nameFilter, this.salaryFilter, this.dateOfBirthFilter, this.dateOfEmploymentFilter, this.departmentFilter, this.sortTerm)
    .subscribe(employees => this.Employees = employees);
  }

  removeEmployee(id: number) {
    const modalRef = this.modalService.open(DeleteEmployeeModalComponent);
    modalRef.componentInstance.employeeId = id;
  }

  editEmployee(id: number) {
    const modalRef = this.modalService.open(EditEmployeeModalComponent);
    modalRef.componentInstance.employeeId = id;
  }
}
