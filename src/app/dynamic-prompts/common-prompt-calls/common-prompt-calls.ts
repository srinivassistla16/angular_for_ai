import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { DynamicPromptService } from '../../services/dynamic-prompt-service';
import { PromptDataModel } from '../../models/prompts_model';

@Component({
  selector: 'app-common-prompt-calls',
  standalone: false,
  templateUrl: './common-prompt-calls.html',
  styleUrl: './common-prompt-calls.css',
})
export class CommonPromptCalls {
  modelName: string | null = "";

  constructor(private route: ActivatedRoute, private dynamicPromptService: DynamicPromptService) { }


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

  queryResponse$: Observable<any> | undefined = of("temp");
  doSubmitPrompt() {
    let mythology = this.dynamicPromptForm.get('mythology')?.value;
    let character = this.dynamicPromptForm.get('character')?.value;
    let noOfLines = this.dynamicPromptForm.get('noOfLines')?.value;
    let noOfLinesInt = 0;
    if (noOfLines === null || noOfLines === undefined || noOfLines === '') {
      noOfLinesInt = 3;
    } else {
      noOfLinesInt = parseInt(noOfLines);
    }
    this.queryResponse$ = this.dynamicPromptService.doGenerate(this.modelName, new PromptDataModel(character, mythology, noOfLinesInt));
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

  
}
