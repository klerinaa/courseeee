import { Component } from '@angular/core';
import {  NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'education-app';
 

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationStart => event instanceof NavigationStart)
    ).subscribe((navigationStart: NavigationStart) => {
      console.log('NavigationStart:', navigationStart.url);
      if (navigationStart.url === '/joinus') {
        document.getElementById('page-container')?.classList.add('joinus-background');
      } else {
        document.getElementById('page-container')?.classList.remove('joinus-background');
      }
    });
  }
}
