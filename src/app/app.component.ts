import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationEnd,
  Event as RouterEvent,
  NavigationStart,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'body',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
    
  }
  
  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.appService.setLoaderVisibility(true);
    }
    if (event instanceof NavigationEnd) {
      window.scrollTo(0, 0)
      this.appService.setLoaderVisibility(false);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.appService.setLoaderVisibility(false);
    }
    if (event instanceof NavigationError) {
      this.appService.setLoaderVisibility(false);
    }
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      //this scrolls thepage to top whenever angular routing occurs
      window.scrollTo(0, 0)
    });
  }
}
