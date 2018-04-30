import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {ServiceModule} from "../services/service.module";
import {QuizRoutingModules} from "./quiz-routing.modules";
import {QuizComponent} from "./quiz.component";
import {QuizService} from "../services/quiz.service";
import {QuestionModel} from "../model/question.model";
import {QuestionComponent} from "./question.component";
import {BaseApiService} from "../services/base-api.service";


@NgModule({
  imports:[
    CommonModule,
    ServiceModule,
    QuizRoutingModules
  ],
  declarations:[
    QuizComponent,
    QuestionComponent
  ],
  providers:[
    QuizService,
    BaseApiService
  ]
})
export class QuizModule{

}
