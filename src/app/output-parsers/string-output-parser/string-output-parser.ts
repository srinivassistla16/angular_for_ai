import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OutputParsersService } from '../../services/output-parsers-service';
import { Observable, of } from 'rxjs';
import { ParserModel } from '../../models/output_parsers_model';

@Component({
  selector: 'app-string-output-parser',
  standalone: false,
  templateUrl: './string-output-parser.html',
  styleUrl: './string-output-parser.css',
})
export class StringOutputParser {
constructor(private outputParsersService : OutputParsersService) {  }

    fb = inject(FormBuilder)
  detailsForm = this.fb.group(
    {
      topicForDetails: ['', [Validators.required]],

    });
    responseForm = this.fb.group(
    {
      response: ['', []],

    });

     summaryForm = this.fb.group(
    {
      topicForSummary: ['', [Validators.required]],

    });
    summaryResponseForm = this.fb.group(
    {
      summaryResponse: ['', []],

    });

    detailedResponse$: Observable<any> | undefined = of("temp");
    doGenerateDetails() {
      this.detailedResponse$ = this.outputParsersService.doGetDetailsFromParser(new ParserModel(this.detailsForm?.controls?.topicForDetails?.value));
          this.detailedResponse$?.subscribe({
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

    
  summaryResponse$: Observable<any> | undefined = of("temp");
    doGenerateSummary() {
       this.summaryResponse$ = this.outputParsersService.doGetSummaryFromParser(new ParserModel(this.summaryForm?.controls?.topicForSummary?.value));
          this.summaryResponse$?.subscribe({
      next: (data: any) => {
        if (data?.model_response != '') {
          this.summaryResponseForm.controls.summaryResponse.setValue(data?.model_response);
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
