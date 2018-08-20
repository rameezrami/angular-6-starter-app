import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth.service";

import { environment } from "./../../../../environments/environment";
import swal from "sweetalert2";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AppService } from './../../../app.service';

@Component({
  templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit, OnDestroy {
  model: any = {
    type: 0
  };
  validationErrors: any = [];
  loading = false;
  returnUrl: string;
  loginLoading = false;
  appName = environment.APP_NAME;

  loginForm: FormGroup;
  formSubmitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private appService: AppService,
    private formBuilder: FormBuilder
  ) {
    
  }

  ngOnInit() {
    document.getElementById("app-body").classList.add("login-page");

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/dashboard";

    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnDestroy() {
    document.getElementById("app-body").classList.remove("login-page");
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  loginUser() {
    this.formSubmitted = true;

    // Prevent submit action if any of form fields are invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.appService.setLoaderVisibility(true);
    this.validationErrors = [];
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        this.formSubmitted = false;
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.appService.setLoaderVisibility(false);
        if (error.status == 400) {
          let response = error.error;
          
          if (response.status == false) {
            console.log(response)
            this.validationErrors = response.errors;
          } else {
            swal({
              text: "Please enter valid login details and try again.",
              type: "error"
            });
          }
        } else {
          swal({
            text: "Something went wrong.",
            type: "error"
          });
        }
      }
    );
  }
}
