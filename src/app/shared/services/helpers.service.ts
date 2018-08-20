import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { environment } from "./../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class HelpersService {
  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn() {
    return this.getAuthUserToken() ? true : false;
  }
  getAuthUserToken() {
    return localStorage.getItem("authUserToken") &&
      localStorage.getItem("authUserToken") != ""
      ? localStorage.getItem("authUserToken")
      : false;
  }
  getAuthUser() {
    let url = `${environment.API_URL}/get-auth-user-data`;
    return this.http.get(url);
  }
}
