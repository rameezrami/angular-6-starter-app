import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { LoaderComponent } from "./loader.component";
import { AppService } from "./app.service";
import { JwtInterceptorProvider,ErrorInterceptorProvider} from "./http-interceptors";
@NgModule({
  declarations: [AppComponent, LoaderComponent],
  imports: [HttpClientModule,SharedModule, AppRoutingModule, BrowserModule],
providers: [
    AppService,
    JwtInterceptorProvider,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
