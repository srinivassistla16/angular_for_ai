import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ChatModelService } from '../../services/chat-model-service';
import { SimpleQuery } from '../../models/chat_input_model';

@Component({
  selector: 'app-gemini-chat-model',
  standalone: false,
  templateUrl: './gemini-chat-model.html',
  styleUrl: './gemini-chat-model.css',
})
export class GeminiChatModel {

  constructor(private chatModelService: ChatModelService) {}
  fb = inject(FormBuilder)

  queryForm = this.fb.group(
    {
      query: ['', [Validators.required]],
     
    });

  responseForm = this.fb.group(
    {
      response: ['', []],
     
    });

    queryResponse$: Observable<any> | undefined = of("temp");
    doSubmitQuery() {
      this.queryResponse$ = this.chatModelService.doQuery("gemini",this.doConstructQuery() );

      this.queryResponse$?.subscribe({
      next: (data: any) => {
        if (data?.model_response != '') {
          this.responseForm.controls.response.setValue(data?.model_response);
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

    doConstructQuery() {
      let simpleQuery = new SimpleQuery(this.queryForm?.controls?.query?.value)
      return simpleQuery;
    }


}
