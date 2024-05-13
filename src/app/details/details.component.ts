import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  course: any;

  constructor(private route: ActivatedRoute,private router: Router) {   window.scrollTo({ top: 0, behavior: 'smooth' }); }

  ngOnInit(): void {
    this.course = history.state.course;
    console.log(this.course )
  }

  redirectToJoinUs(): void {
    this.router.navigateByUrl('/joinus');
  }
}
