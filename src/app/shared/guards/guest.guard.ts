import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class GuestGuard implements CanActivate {
  
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('authUserToken')) {
      // logged in so redirect to dashboard
      this.router.navigate(['/dashboard']);
      return false;
    }else{// not logged in
        return true;
    }
  }
}
