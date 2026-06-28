import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gemini-chat-model',
  standalone: false,
  templateUrl: './gemini-chat-model.html',
  styleUrl: './gemini-chat-model.css',
})
export class GeminiChatModel {

  constructor() {}
  fb = inject(FormBuilder)

  queryForm = this.fb.group(
    {
      query: ['', [Validators.required]],
     
    });

  responseForm = this.fb.group(
    {
      response: ['', []],
     
    });

    doSubmitQuery() {
      alert("TODO")
    }

}
