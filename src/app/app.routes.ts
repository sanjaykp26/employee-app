import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeeListComponent } from './employee/pages/employee-list/employee-list.component';
import { ListViewComponent } from './list-view/list-view.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'apidatatable',
    component: EmployeeListComponent
  
   
  },
  {
    path: 'employee',
    component: ListViewComponent
  
   
  },
  {
    path: 'employee/new',
    component: AddEmployeeComponent
  
   
  },

  // fallback route
  // {
  //   path: '**',
  //   redirectTo: 'login'
  // }
];

