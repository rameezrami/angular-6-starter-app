import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";

import { AuthGuard, GuestGuard } from "./../../shared";
const routes: Routes = [
  { path: "auth/login", component: LoginComponent, canActivate: [GuestGuard] },
  { path: "auth/logout", component: LogoutComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class AuthRoutingModule {}
