import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { TextSplitterService } from '../../services/text-splitter-service';
import { DocumentFile } from '../../models/document_loaders_model';

@Component({
  selector: 'app-recursive-char-text-splitter',
  standalone: false,
  templateUrl: './recursive-char-text-splitter.html',
  styleUrl: './recursive-char-text-splitter.css',
})
export class RecursiveCharTextSplitter {
  constructor(private textSplitterService: TextSplitterService) { }
  fb = inject(FormBuilder)
  summaryForm = this.fb.group(
    {
      topicForSummary: ['semiconductor.txt', [Validators.required]],
    });
  summaryResponseForm = this.fb.group(
    {
      summaryResponse: ['', []],
    });
  summaryResponse$: Observable<any> | undefined = of("temp");
  doGenerateSummary() {
    this.summaryResponse$ = this.textSplitterService.splitFile(new DocumentFile(this.summaryForm?.controls?.topicForSummary?.value));
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

