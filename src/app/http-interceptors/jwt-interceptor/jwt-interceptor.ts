import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HelpersService } from '../../shared';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  
  constructor(
    private helpersService: HelpersService
  ) {
  }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const authToken = this.helpersService.getAuthUserToken();
      let interceptedReq;
      if(authToken) {
        // Clone the request and set the JWT header.
        interceptedReq = request.clone({ setHeaders: { Authorization: `Bearer ${authToken}` } });
      } else {
        interceptedReq = request;
      }
      return next.handle(interceptedReq);
    }
}