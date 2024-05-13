import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  contactForm!: FormGroup;
  courses = [
    {
      title: "Web design & development courses for beginners",
      image: "assets/img/courses-1.jpg",
      instructor: "John Doe",
      detail_url: "detail.html"
    },
    {
      title: "Advanced Web Development",
      image: "assets/img/courses-2.jpg",
      instructor: "Jane Smith",
      detail_url: "detail.html"
    },
    {
      title: "Graphic Design Fundamentals",
      image: "assets/img/courses-3.jpg",
      instructor: "Alice Johnson",
      detail_url: "detail.html"
    },
    {
      title: "Introduction to JavaScript",
      image: "assets/img/courses-4.jpg",
      instructor: "Michael Brown",
      detail_url: "detail.html"
    },
    // Add more courses as needed
  ];
  constructor(private router: Router,private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  redirectToJoinUs(): void {
    this.router.navigateByUrl('/joinus');
  }
  onSubmit(): void {
    if (this.contactForm.valid) {
      // Handle form submission, e.g., send form data to backend
      console.log(this.contactForm.value);
      // Reset form after submission
      this.contactForm.reset();
    } else {
      // Mark all fields as touched to display validation messages
      this.contactForm.markAllAsTouched();
    }
  }
  navigateToDetails(course: any) {
    this.router.navigate(['/details'], { state: { course } });
  }
}
