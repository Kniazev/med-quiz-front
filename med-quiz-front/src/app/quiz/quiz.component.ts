import {Component, OnInit} from "@angular/core";
import {QuizService} from "../services/quiz.service";
import {QuestionModel} from "../model/question.model";
import {Observable} from "rxjs/Observable";
import {BaseApiService} from "../services/base-api.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'quiz',
  templateUrl: 'quiz.component.html'
})
export class QuizComponent implements OnInit {

  key: string = '';
  count: number = 0;
  // models: QuestionModel[];
  // categories: string[];
  // questions: QuestionModel[] = [];
  public all: QuestionModel[];
  categoryList: string[];

  constructor(private quizService: QuizService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params
      .subscribe(p=>{
        this.key = p['category']
      })
  }

  ngOnInit(): void {

  }

  get models(): QuestionModel[] {
    return this.quizService.getAll()
  }

  get categories(): string[] {
    return this.quizService.getCategories();
  }

  get questions() {
    return this.quizService.getQuestionsByCategory(this.key);
  }

  onNextClick() {

  }
}
