import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {dateValidator} from '../core/date.validator';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private formBuilder: FormBuilder) { }

  public createForm(): FormGroup {
    return this.formBuilder.group({
      title: [null, [Validators.required, Validators.maxLength(100)]],
      description: [null, [Validators.required, Validators.maxLength(250)]],
      publishDate: [null, [Validators.required]],
      expirationDate: [null, [Validators.required]],
      questions: this.formBuilder.array([this.createQuestionForm()])
    }, {
      validator: Validators.compose([dateValidator('publishDate', 'expirationDate')])
    });
  }

  public createQuestionForm(): FormGroup {
    return this.formBuilder.group({
      question: [null, Validators.required]
    });
  }
}
