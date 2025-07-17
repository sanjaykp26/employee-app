import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Employee {
  name: string;
  contact: string;
  email: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees = new BehaviorSubject<Employee[]>([]);
  employees$ = this.employees.asObservable();

  addEmployee(employee: Employee) {
    const current = this.employees.value;
    this.employees.next([...current, employee]);
  }

  getEmployees(): Employee[] {
    return this.employees.value;
  }
  setEmployees(employees: Employee[]) {
    this.employees.next(employees);
  }
  
}
