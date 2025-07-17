import { Component, HostListener } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import { AuthService } from '../services/auth.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebarVisible = true;

  constructor(private router: Router,private authservice:AuthService) {}

  isSmallScreen = false;

  @HostListener('window:resize')
  onResize() {
    this.isSmallScreen = window.innerWidth < 768;
    if (this.isSmallScreen) this.sidebarVisible = false;
    else this.sidebarVisible = true;
  }

  ngOnInit() {
    this.onResize();
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  logout(): void {
  this.authservice.logout()
    this.router.navigate(['/login']);
  }
}
