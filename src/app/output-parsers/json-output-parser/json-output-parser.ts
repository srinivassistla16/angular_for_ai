import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OutputParsersService } from '../../services/output-parsers-service';
import { Observable, of } from 'rxjs';
import { ParserModel } from '../../models/output_parsers_model';

@Component({
  selector: 'app-json-output-parser',
  standalone: false,
  templateUrl: './json-output-parser.html',
  styleUrl: './json-output-parser.css',
})
export class JsonOutputParser {

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

      detailedResponse$: Observable<any> | undefined = of("temp");
      doGenerateDetails() {
        this.detailedResponse$ = this.outputParsersService.doGetDetailsFromJsonParser(new ParserModel(this.detailsForm?.controls?.topicForDetails?.value));
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

}
