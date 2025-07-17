import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee, EmployeeService } from '../services/employee.service';
import { EMPLOYEES } from '../employee/models/data';

@Component({
  selector: 'app-list-view',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css',
})
export class ListViewComponent {
  constructor(private router: Router, private empService: EmployeeService) {}
  employees: Employee[] = [];

  searchText = '';
  sortField = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';
  currentPage = 1;
  searchField: string = 'name';
  displayedEmployees: any[] = [];
  pageSize = 10;

  ngOnInit(): void {
    this.empService.employees$.subscribe((emps) => {
      this.employees = emps;
      this.updatePagination();
    });
  }
  getValue(emp: Employee, key: string): string {
    return (emp as any)[key] || '';
  }

  get filteredEmployees(): Employee[] {
    const keyword = this.searchText.toLowerCase();
  
    const filtered = this.employees.filter(emp => {
      const value = this.getValue(emp, this.searchField)?.toLowerCase() ?? '';
      return value.includes(keyword);
    });
  
    return filtered.sort((a, b) => {
      const aVal = this.getValue(a, this.sortField)?.toLowerCase() ?? '';
      const bVal = this.getValue(b, this.sortField)?.toLowerCase() ?? '';
      const result = aVal.localeCompare(bVal);
      return this.sortDirection === 'asc' ? result : -result;
    });
  }
  

  onSearchChange(): void {
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination(): void {
    const start = this.getStartIndex();
    const end = this.getEndIndex();
    this.displayedEmployees = this.filteredEmployees.slice(start, end);
  }

  getStartIndex(): number {
    return (this.currentPage - 1) * this.pageSize;
  }

  getEndIndex(): number {
    return this.getStartIndex() + this.pageSize;
  }

  nextPage(): void {
    if (this.getEndIndex() < this.filteredEmployees.length) {
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

  toggleSortDirection(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.updatePagination();
  }

  delete(empToDelete: any): void {
    this.employees = this.employees.filter((emp) => emp !== empToDelete);
    this.updatePagination();
  }

  open(): void {
    this.router.navigate(['/employee/new']); 
  }
}
