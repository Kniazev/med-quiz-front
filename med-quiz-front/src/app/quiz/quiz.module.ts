import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ServiceModule} from "../services/service.module";

@NgModule({
  imports:[
    CommonModule,
    ServiceModule
  ]
})
export class QuizModule{

}
