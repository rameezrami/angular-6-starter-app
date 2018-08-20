import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  
  constructor(
    private router: Router
  ) {
  }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(catchError(err => {
        if (err.status === 401 || err.status === 403) {
          console.log(`got status : ${err.status}`)
            // auto logout if 401 response returned from api
            this.router.navigate(['auth/logout'])
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
    }))
    }
}