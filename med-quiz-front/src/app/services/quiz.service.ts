import {Injectable} from "@angular/core";
import {BaseApiService} from "./base-api.service";
import {Http} from "@angular/http";
import {QuestionModel} from "../model/question.model";


@Injectable()
export class QuizService extends BaseApiService {
  private url: string = 'questions';
  private categories: string[] = [];
  private questions: QuestionModel[] = [];


  constructor(protected http: Http) {
    super(http);
    this.get(this.url)
      .subscribe(data => {
        this.questions = data;
        this.categories = data.map(q => q.category)
          .filter((c, index, array) => array.indexOf(c) == index).sort();
      })
  }

  getQuestionsByCategory(category: string): QuestionModel[] {
    return this.questions
      .filter(p => category == p.category);
  }

  getAll(): QuestionModel[] {
    return this.questions
  }

  getCategories(): string[] {

    return this.categories;
  }

  saveQuestion(question: QuestionModel) {
    if (question.id == null || question.id == 0) {
      this.post(this.url, question)
        .subscribe(p => this.questions.push(p));
    } else {
      this.put(this.url, question)
        .subscribe(p => {
          this.questions.splice(this.questions
            .findIndex(p => p.id == question.id), 1, question);
        });
    }
  }
}
