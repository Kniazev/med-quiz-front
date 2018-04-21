import {Injectable} from "@angular/core";
import {BaseApiService} from "./base-api.service";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class QuizService extends BaseApiService{
  constructor(protected http: Http){
    super(http)
  }

  getQuestionByCategory(category:string){

  }
}
