import { Component} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: "logout.component.html"
})
export class LogoutComponent{

  constructor(
    private router: Router,
  ) {
    localStorage.removeItem('authUserToken')
    this.router.navigate(['/auth/login'])
  }

}
