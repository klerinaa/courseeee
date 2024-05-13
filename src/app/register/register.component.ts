import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      streetAddress: ['', Validators.required],
      streetAddressLine2: [''],
      country: ['', Validators.required],
      city: ['', Validators.required],
      region: ['', Validators.required],
      postalCode: ['', Validators.required],
      course: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.registrationForm.valid) {
      // Process form submission here
      console.log(this.registrationForm.value);
    } else {
      // Mark all fields as touched to display errors
      this.registrationForm.markAllAsTouched();
    }
  }

}