import { Component, OnInit } from "@angular/core";
import { AppService } from "./../../app.service";

@Component({
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  constructor(
    private appService: AppService
  ) {}
  ngOnInit() {
    this.appService.setMsgBoxData({
      message: "This is a sample success alert message",
      type: "success",
      btnLink: "/dashboard",
      btnText: "Go to dashboard"
    });
  }
}
