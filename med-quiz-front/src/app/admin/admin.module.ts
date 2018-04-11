import {NgModule} from "@angular/core";
import {AuthModule} from "./auth/auth.module";
import {CommonModule} from "@angular/common";

@NgModule({
  imports:[
    AuthModule,
    CommonModule
  ]
})
export class AdminModule{

}
