import {AnswerModel} from "./answer.model";

export class QuestionModel {
  constructor(public id:number,
              public body:string,
              public category: string,
              public answers:AnswerModel[]) {
  }
}
