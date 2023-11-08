import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { EmloyeeListComponent } from './features/employee/emloyee-list/emloyee-list.component';
import { CreateEmloyeeModalComponent } from './features/employee/create-emloyee-modal/create-emloyee-modal.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DropdownDepartmentComponent } from './features/department/dropdown-department/dropdown-department.component';
import { DeleteEmployeeModalComponent } from './features/employee/delete-employee-modal/delete-employee-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeTableComponent } from './features/employee/employee-table/employee-table.component';
import { EditEmployeeModalComponent } from './features/employee/edit-employee-modal/edit-employee-modal.component'
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmloyeeListComponent,
    CreateEmloyeeModalComponent,
    DropdownDepartmentComponent,
    DeleteEmployeeModalComponent,
    EmployeeTableComponent,
    EditEmployeeModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ 
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
