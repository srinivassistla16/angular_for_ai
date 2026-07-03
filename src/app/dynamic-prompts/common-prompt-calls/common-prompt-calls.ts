import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-common-prompt-calls',
  standalone: false,
  templateUrl: './common-prompt-calls.html',
  styleUrl: './common-prompt-calls.css',
})
export class CommonPromptCalls {
  modelName: string | null = "";

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    // this.modelName = this.route.snapshot.paramMap.get('modelname');
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.modelName = params.get('modelname')
    });
  }
  fb = inject(FormBuilder)
  dynamicPromptForm = this.fb.group(
    {
      mythology: ['', [Validators.required]],
      character: ['', [Validators.required]],
      noOfLines: ['', [Validators.required]],

    });

  responseForm = this.fb.group(
    {
      response: ['', []],

    });

  doSubmitPrompt() {
    alert("Prompt Submitted");
  }

}
