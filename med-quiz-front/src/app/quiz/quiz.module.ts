import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {ServiceModule} from "../services/service.module";
import {QuizRoutingModules} from "./quiz-routing.modules";


@NgModule({
  imports:[
    CommonModule,
    ServiceModule,
    QuizRoutingModules
  ]
})
export class QuizModule{

}
