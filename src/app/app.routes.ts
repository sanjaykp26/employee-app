import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeeListComponent } from './employee/pages/employee-list/employee-list.component';
import { ListViewComponent } from './list-view/list-view.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AuthGuard } from './auth.guard';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'apidatatable',
    component: EmployeeListComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'employee',
    component: ListViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employee/new',
    component: AddEmployeeComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

