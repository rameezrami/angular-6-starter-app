import { Component } from "@angular/core";
import { Router } from "@angular/router";
import * as _ from 'lodash';
@Component({
  selector: "app-sidebar",
  templateUrl: "./app-sidebar.component.html"
})
export class AppSideBarComponent {
  currentUrl: string = "";
  menu = [
    {
      title: "Dashboard",
      path: "/dashboard",
      iconClass: "fa fa-dashboard"
    },
    {
      title: "Parent Menu",
      path: "/#",
      iconClass: "fa fa-bars",
      children: [
        {
          title: "Child Menu 1",
          path: "/#",
          iconClass: "fa fa-bars",
        },
        {
          title: "Child Menu 2",
          path: "/#",
          iconClass: "fa fa-bars",
        }
      ]
    },
    {
      title: "Logout",
      path: "/auth/logout",
      iconClass: "fa fa-sign-out"
    },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      this.currentUrl = this.router.url;
    });
  }

  isChildrenActive(menuItem) {
    let childMenu = menuItem.children
    if (!childMenu || childMenu.length == 0) {
      return false
    }

    let activeChild = _.find(childMenu, ['path', this.currentUrl])
    return activeChild ? true : false
  }
}
