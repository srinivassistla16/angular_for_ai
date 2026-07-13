import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ParserModel } from '../../models/output_parsers_model';
import { ChainsService } from '../../services/chains-service';


@Component({
  selector: 'app-sequential-chain',
  standalone: false,
  templateUrl: './sequential-chain.html',
  styleUrl: './sequential-chain.css',
})
export class SequentialChain {
  constructor(private chainsService: ChainsService) { }
  fb = inject(FormBuilder)
  summaryForm = this.fb.group(
    {
      topicForSummary: ['', [Validators.required]],
    });
  summaryResponseForm = this.fb.group(
    {
      summaryResponse: ['', []],
    });
  summaryResponse$: Observable<any> | undefined = of("temp");
  doGenerateSummary() {
    this.summaryResponse$ = this.chainsService.doGetSummaryFromParallelChain(new ParserModel(this.summaryForm?.controls?.topicForSummary?.value));
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
