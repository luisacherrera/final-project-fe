import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { UserCardComponent } from './components/user-card/user-card.component';

import { IndexPageComponent } from './pages/index-page/index-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

import { AuthService } from './services/auth.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { UsersService } from './services/users.service';

const routes: Routes = [
  { path: '',  component: IndexPageComponent, canActivate: [ InitAuthGuardService, RequireAnonGuardService ] },
  { path: 'login',  component: LoginPageComponent, canActivate: [ RequireAnonGuardService ]},
  { path: 'signup',  component: SignupPageComponent, canActivate: [ RequireAnonGuardService ]},
  { path: 'users',  component: UsersPageComponent, canActivate: [ RequireUserGuardService ]},
  // { path: 'page',  component: ... , canActivate: [ RequireUserGuardService ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    UsersPageComponent,
    SearchComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    RequireAnonGuardService,
    RequireUserGuardService,
    InitAuthGuardService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
