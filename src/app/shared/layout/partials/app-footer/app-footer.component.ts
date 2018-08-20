import { Component } from '@angular/core';
import { environment } from './../../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html'
})
export class AppFooterComponent { 
  appName = environment.APP_NAME
}
