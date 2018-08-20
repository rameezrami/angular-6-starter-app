import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AuthRoutingModule } from './auth.routing.module';

import { SharedModule } from '../../shared';
import { AuthService } from './auth.service';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    HttpModule,
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
  ],
  providers: [
    HttpClientModule,
    AuthService
  ]
})
export class AuthModule { }
