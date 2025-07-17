import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/data';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  users: User[] = [];
  displayedEmployees: User[] = [];
  currentPage = 1;
  pageSize = 15;

  offset = 0;
  limit = 1000;
  isLoading = false;

  searchText: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  sortField: string = 'name';
  searchField: string = 'name';

  private service = inject(EmployeeService);

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    if (this.isLoading) return;

    this.isLoading = true;
    this.service.getUsers(this.offset, this.limit).subscribe({
      next: (res) => {
        if (res?.data?.length) {
          this.users.push(...res.data); 
          this.updatePagination();
          this.offset += this.limit;
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        this.isLoading = false;
      }
    });
  }

  get filteredUsers(): User[] {
    const keyword = this.searchText.toLowerCase();
    const filtered = this.users.filter((user: any) => {
      const value = this.resolveValue(user, this.searchField)?.toString().toLowerCase() ?? '';
      return value.includes(keyword);
    });

    return filtered.sort((a, b) => {
      const aVal = this.resolveValue(a, this.sortField)?.toString().toLowerCase() ?? '';
      const bVal = this.resolveValue(b, this.sortField)?.toString().toLowerCase() ?? '';
      const result = aVal.localeCompare(bVal);
      return this.sortDirection === 'asc' ? result : -result;
    });
  }

  updatePagination(): void {
    const startIndex = this.getStartIndexForPage(this.currentPage);
    const endIndex = this.getEndIndexForPage(this.currentPage);
    const filtered = this.filteredUsers;
    if (endIndex > this.users.length && !this.isLoading) {
      this.loadUsers();
    }

    this.displayedEmployees = filtered.slice(startIndex, endIndex);
  }


  nextPage(): void {
    const nextStartIndex = this.getStartIndexForPage(this.currentPage + 1);
    if (nextStartIndex < this.filteredUsers.length || !this.isLoading) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  sortColumn(column: string): void {
    if (this.sortField === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = column;
      this.sortDirection = 'asc';
    }
    this.updatePagination();
  }

  onSearchChange(): void {
    this.currentPage = 1;
    this.updatePagination();
  }

  deleteUser(userToDelete: User): void {
    this.users = this.users.filter(user => user !== userToDelete);
    this.updatePagination();
  }

  resolveValue(obj: any, key: string): any {
    if (key === 'city') return obj?.address?.city;
    return obj[key];
  }

  getSortIcon(column: string): string {
    if (this.sortField !== column) return 'bi bi-caret-down';
    return this.sortDirection === 'asc' ? 'bi bi-caret-up-fill' : 'bi bi-caret-down-fill';
  }

  getPageSize(page: number): number {
    return page === 1 ? 15 : 10;
  }

  getStartIndexForPage(page: number): number {
    if (page <= 1) return 0;
    return 15 + (page - 2) * 10;
  }

  getEndIndexForPage(page: number): number {
    return this.getStartIndexForPage(page) + this.getPageSize(page);
  }

  getStartIndex(): number {
    return this.getStartIndexForPage(this.currentPage);
  }

  getEndIndex(): number {
    const end = this.getEndIndexForPage(this.currentPage);
    return end > this.filteredUsers.length ? this.filteredUsers.length : end;
  }

  toggleSortDirection(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.updatePagination();
  }
  
}  
