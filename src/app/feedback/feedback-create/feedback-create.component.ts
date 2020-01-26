import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {FeedbackService} from '../feedback.service';

@Component({
  selector: 'app-feedback-create',
  templateUrl: './feedback-create.component.html',
  styleUrls: ['./feedback-create.component.scss']
})
export class FeedbackCreateComponent implements OnInit {
  public form: FormGroup;

  constructor(private service: FeedbackService) { }

  ngOnInit() {
    this.form = this.service.createForm();
  }

  public onSubmit() {
    console.log(this.form.value);
  }

  public addQuestion() {
    const q = this.service.createQuestionForm();
    (this.form.get('questions') as FormArray).push(q);
  }
}
