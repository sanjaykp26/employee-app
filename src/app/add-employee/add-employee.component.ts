import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  employeeForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,private empService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    });
  }

  get f() {
    return this.employeeForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.employeeForm.invalid) return;

    this.empService.addEmployee(this.employeeForm.value);

   

    alert('Employee added successfully!');
    this.router.navigate(['/employee']); 
  }
}
