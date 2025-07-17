import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-sidebar',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isCollapsed = false;

  constructor(private router: Router,private authservice:AuthService) {}

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  logout(): void {
  this.authservice.logout()
    this.router.navigate(['/login']);
  }
}
