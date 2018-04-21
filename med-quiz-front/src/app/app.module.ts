import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AdminModule} from "./admin/admin.module";
import {AppRoutingModule} from "./app-routing.module";
import {AuthModule} from "./auth/auth.module";
import {UsersService} from "./services/users.service";
import {HttpModule} from "@angular/http";
import {AuthService} from "./services/auth.service";
import {QuizModule} from "./quiz/quiz.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AuthModule,
    AppRoutingModule,
    HttpModule,
    QuizModule
  ],
  providers: [UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
