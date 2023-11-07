import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmloyeeListComponent } from './features/employee/emloyee-list/emloyee-list.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmloyeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
