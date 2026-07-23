import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToolCallingService } from '../../services/tool-calling-service';
import { Observable, of } from 'rxjs';
import { SimpleQuery } from '../../models/chat_input_model';

@Component({
  selector: 'app-tool-calling-multiplier',
  standalone: false,
  templateUrl: './tool-calling-multiplier.html',
  styleUrl: './tool-calling-multiplier.css',
})
export class ToolCallingMultiplier {

   constructor( private toolCallingService: ToolCallingService) { }

  fb = inject(FormBuilder)
  queryForm = this.fb.group(
    {
      query: ['Can you multiply 3 with 5  and give the product?', [Validators.required]],
    });
  responseForm = this.fb.group(
    {
      answer: ['', []],
      messages: ['', []]
    });

  queryResponse$: Observable<any> | undefined = of("temp");
  doSubmitQuery() {
    this.queryResponse$ = this.toolCallingService.multiplyToolCall(new SimpleQuery(this.queryForm?.controls?.query?.value));

    this.queryResponse$?.subscribe({
      next: (data: any) => {
        if (data?.model_response != '') {
          this.responseForm.controls.answer.setValue(data?.model_response);
          this.responseForm.controls.messages.setValue(data?.messages);
        }
        // Handle success (e.g., show a success message)
      },
      error: (error: any) => {
        console.error('Technical Issue. Please Contact Support Engineer!!', error);
        // Handle error
      },
      complete: () => {
        // Handle the completion event (optional)
        console.log('Observable completed');
      }
    });
  }

}
