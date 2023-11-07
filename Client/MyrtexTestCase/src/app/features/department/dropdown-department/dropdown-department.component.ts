import { Component } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-dropdown-department',
  templateUrl: './dropdown-department.component.html',
  styleUrls: ['./dropdown-department.component.css']
})
export class DropdownDepartmentComponent {
  Departments: any;

  ChangeDepartment(e:any) {
    console.log(e.target.value)
  }
  constructor(private service:DepartmentService) { }

  ngOnInit(): void {
    this.service.getDepartments().subscribe((data:any) =>{
      this.Departments = data;
      console.log(data);
    })
  }

}
