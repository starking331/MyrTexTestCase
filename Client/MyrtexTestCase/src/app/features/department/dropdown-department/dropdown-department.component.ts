import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription, delay, tap } from 'rxjs';
import { DepartmentModel } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-dropdown-department',
  templateUrl: './dropdown-department.component.html',
  styleUrls: ['./dropdown-department.component.css']
})
export class DropdownDepartmentComponent implements OnDestroy {
  @Input() departmentId: number = 0;
  @Output() valueSelected = new EventEmitter<string>();
  Departments: DepartmentModel[] = [];
  selectedDepartment: DepartmentModel | undefined;
  private getDepartmentSubscribtion?: Subscription;

  ChangeDepartment(e:any) {
    this.valueSelected.emit(e.target.value);
  }

  constructor(private service:DepartmentService) { }

  ngOnInit(): void {
    this.getDepartmentSubscribtion = this.service.getDepartments()
    .pipe(
      delay(1)
    )
    .subscribe({
      next: (response) => {
        this.Departments = response;
        this.selectedDepartment = this.Departments.find(dep => dep.id === this.departmentId);
      },
      error: () => {
        alert("Произошла ошибка.");
      }
    })
  }

  ngOnDestroy(): void {
    this.getDepartmentSubscribtion?.unsubscribe();
  }
}
