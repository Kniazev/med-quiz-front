import {Component, OnInit} from "@angular/core";
import {QuizService} from "../services/quiz.service";
import {QuestionModel} from "../model/question.model";
import {Observable} from "rxjs/Observable";
import {BaseApiService} from "../services/base-api.service";


@Component({
  selector: 'quiz',
  templateUrl: 'quiz.component.html'
})
export class QuizComponent implements OnInit {

  key: string = 'ОКС';
  count: number = 0;
  // models: QuestionModel[];
  // categories: string[];
  // questions: QuestionModel[] = [];
  public all: QuestionModel[];
  categoryList: string[];

  constructor(private quizService: QuizService, private baseApi: BaseApiService,) {
    this.baseApi.get("questions")
      .subscribe(data=>{
        this.all = data.questions
      });
    console.log(this.all);
  }

  ngOnInit(): void {

  }

  get models(): QuestionModel[]{
    return this.quizService.getAll()
  }

  get categories(): string[]{
    return this.quizService.getCategories();
  }

  get questions(){
    return this.quizService.getQuestionsByCategory(this.key);
  }

  onNextClick(){
   this.count++;

   console.log(this.count);
  }
}
