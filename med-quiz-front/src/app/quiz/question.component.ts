import {Component, Input, Output} from "@angular/core";
import {QuestionModel} from "../model/question.model";
import {AnswerModel} from "../model/answer.model";

@Component({
  selector:'question',
  templateUrl:'question.component.html',
})
export class QuestionComponent{
  result: number = 0;
  @Input() question: QuestionModel;

  onSelected(answer: AnswerModel){
    if(answer.isRight === true){
      alert('huy');
    }

    console.log(this.result);
  }
}
