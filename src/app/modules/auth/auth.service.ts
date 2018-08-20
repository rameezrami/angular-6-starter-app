import { Router } from "@angular/router";

import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
// import 'rxjs/add/operator/map'
import { environment } from "./../../../environments/environment";
import { map, filter, catchError, mergeMap } from "rxjs/operators";
@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(data) {
    let url = `${environment.API_URL}/login`;

    return this.http.post(url, data).pipe(
      map((resp: any) => {
        if (resp.status == true) {
          let response = resp.data;
          if (response && response.token) {
            // store jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("authUserToken", response.token);
          }
        }
      })
    );
  }
  getAuthorizationToken() {
    if (
      localStorage.getItem("authUserToken") &&
      localStorage.getItem("authUserToken") != ""
    ) {
      return localStorage.getItem("authUserToken");
    } else {
      return false;
    }
  }
  getResetPasswordData(resetData) {
    return this.http.get(
      environment.API_URL +
        "/reset/password/" +
        resetData.userId +
        "/" +
        resetData.token,
      resetData
    );
  }
  register(registerData) {
    return this.http.post(environment.API_URL + "/register", registerData);
  }
  forgotPassword(login) {
    return this.http.post(environment.API_URL + "/forgot/password", {
      login: login
    });
  }
  logout() {
    localStorage.removeItem("authUserToken");
    this.router.navigate(["/"]);
  }
  forgot(email) {
    let url = environment.API_URL + "users/forgotpassword";
    let body = {
      email: email
    };
    return this.http.post(url, body);
  }
  resetPassword(resetData) {
    let url =
      environment.API_URL +
      "/reset/password/" +
      resetData.user_id +
      "/" +
      resetData.token;
    let body = {
      token: resetData.token,
      password: resetData.password,
      current_password: resetData.current_password,
      confirm_password: resetData.confirm_password,
      user_id: resetData.user_id
    };
    return this.http.post(url, body);
  }
}
