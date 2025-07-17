import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from "./employee/pages/employee-list/employee-list.component";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from "./login/login.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AuthService } from './services/auth.services';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, LoginComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee-app';
  isLoggedIn = false;
  constructor(public auth: AuthService) {}
  ngOnInit(): void {
    const user = localStorage.getItem('user');
    this.isLoggedIn = !!user;
  }

  handleLoginSuccess(): void {
    this.isLoggedIn = true;
  }
}
