import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ParserModel } from '../../models/output_parsers_model';
import { OutputParsersService } from '../../services/output-parsers-service';
import { ChainsService } from '../../services/chains-service';


@Component({
  selector: 'app-conditional-chain',
  standalone: false,
  templateUrl: './conditional-chain.html',
  styleUrl: './conditional-chain.css',
})
export class ConditionalChain {

  constructor(private chainsService: ChainsService) {}
  
  fb = inject(FormBuilder)
  queryForm = this.fb.group(
    {
      query: ['World is beautiful', [Validators.required]],

    });
  responseForm = this.fb.group(
    {
      response: ['', []],
      airesponse: ['', []],


    });

  queryResponse$: Observable<any> | undefined = of("temp");
  doSubmitQuery() {
    this.queryResponse$ = this.chainsService.doGetSummaryFromConditionalChain(this.doConstructQuery());

    this.queryResponse$?.subscribe({
      next: (data: any) => {
        if (data?.model_response != '') {
          this.responseForm.controls.response.setValue(data?.model_response);
          this.responseForm.controls.airesponse.setValue(data?.ai_response);
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
    let parserModel = new ParserModel(this.queryForm?.controls?.query?.value)
    return parserModel;
  }

}
