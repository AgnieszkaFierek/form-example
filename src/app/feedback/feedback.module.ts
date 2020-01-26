import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackCreateComponent } from './feedback-create/feedback-create.component';
import {FeedbackRoutingModule} from './feedback-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';



@NgModule({
  declarations: [FeedbackCreateComponent],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ]
})
export class FeedbackModule { }
