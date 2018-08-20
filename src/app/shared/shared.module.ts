import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SearchPipe, SortPipe } from "./pipes";

import { HelpersService } from "./services";

import { MessageBoxComponent } from './components/message-box';

import {
  AppLayoutComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSideBarComponent
} from "./layout/";

import { AuthGuard, GuestGuard } from "./guards";

import { StopClickPropagation, AsideToggleDirective } from "./directives";
@NgModule({
  imports: [FormsModule, CommonModule, RouterModule, HttpModule, HttpClientModule],


declarations: [
    AppLayoutComponent,

    AppFooterComponent,
    AppHeaderComponent,
    AppSideBarComponent,

    MessageBoxComponent,

    AsideToggleDirective,
    StopClickPropagation,

    SearchPipe,
    SortPipe
  ],
  providers: [AuthGuard, GuestGuard, HelpersService],
  exports: [StopClickPropagation, SearchPipe, SortPipe]
})
export class SharedModule {}
