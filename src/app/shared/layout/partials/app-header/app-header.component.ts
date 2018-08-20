import { Component } from '@angular/core'
import { environment } from '../../../../../environments/environment';
import { HelpersService } from './../../../services/helpers.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  appName = environment.APP_NAME
  userData:any = {}

  constructor(
    private helpersService: HelpersService
  ){
    this.getAuthUserData()
  }
  getAuthUserData(){
    this.helpersService.getAuthUser().subscribe(
      (response:any) => {
        this.userData = response.data.user
      },
      error => {
        console.log('user data could not fetch, might have expired your token')
      }
    );
  }
}
