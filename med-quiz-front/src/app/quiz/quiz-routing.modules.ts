import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {QuizComponent} from "./quiz.component";

const routes: Routes = [
  {path: 'quiz', component: QuizComponent, children: [
      {path:'q', component: QuizComponent}
    ] }
];

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class QuizRoutingModules{

}
