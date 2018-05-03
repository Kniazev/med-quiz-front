import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {QuizComponent} from "./quiz.component";

const routes: Routes = [
  // {path: '', component: QuizComponent, children: [
  //     {path:'quiz/:category', component: QuizComponent}
  //   ] }
  {path: 'quiz/:category',  component: QuizComponent,}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class QuizRoutingModules {

}
