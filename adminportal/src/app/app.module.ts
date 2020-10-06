import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { AuthorizeGuard } from './services/auth.guard';
import { JWTTokenService } from './services/jwt-token.service';
import { AdminComponent } from './admin/admin.component';
import { AdsComponent } from './admin/ads/ads.component';
import { LogsComponent } from './admin/logs/logs.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UniversalAppInterceptor } from './services/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AdsComponent,
    LogsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoginService, AuthService, AuthorizeGuard, DataService,
    JWTTokenService, { provide: HTTP_INTERCEPTORS, useClass: UniversalAppInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
