import { Component } from '@angular/core';
import {QuizService} from "./services/quiz.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private quizService: QuizService){

  }

  get categories(){
    return this.quizService.getCategories();
  }
}
