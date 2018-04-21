import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {ServiceModule} from "../services/service.module";
import {QuizRoutingModules} from "./quiz-routing.modules";
import {QuizComponent} from "./quiz.component";


@NgModule({
  imports:[
    CommonModule,
    ServiceModule,
    QuizRoutingModules
  ],
  declarations:[
    QuizComponent
  ]
})
export class QuizModule{

}
