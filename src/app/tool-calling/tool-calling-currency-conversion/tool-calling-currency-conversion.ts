import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToolCallingService } from '../../services/tool-calling-service';
import { Observable, of } from 'rxjs';
import { SimpleQuery } from '../../models/chat_input_model';


@Component({
  selector: 'app-tool-calling-currency-conversion',
  standalone: false,
  templateUrl: './tool-calling-currency-conversion.html',
  styleUrl: './tool-calling-currency-conversion.css',
})
export class ToolCallingCurrencyConversion {

   constructor( private toolCallingService: ToolCallingService) { }

  fb = inject(FormBuilder)
  queryForm = this.fb.group(
    {
      query: ['First get the conversion factor between USD and INR. Then convert 10 USD to INR.', [Validators.required]],
    });
  responseForm = this.fb.group(
    {
      answer: ['', []],
      messages: ['', []]
    });

  queryResponse$: Observable<any> | undefined = of("temp");
  doSubmitQuery() {
    this.queryResponse$ = this.toolCallingService.currencyConversionToolCall(new SimpleQuery(this.queryForm?.controls?.query?.value));

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

