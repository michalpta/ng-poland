import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  breadcrumbs: any[];

  constructor(private router: Router) {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map((event: NavigationEnd) => event.url)
      .subscribe((url: string) => {
        this.breadcrumbs = url.split('/')
          .map((x, index, arr) => { return { 
            path: arr.slice(0, index + 1).join('/'), 
            name: x 
          }; })
        this.breadcrumbs.shift();
      });
  }
}
