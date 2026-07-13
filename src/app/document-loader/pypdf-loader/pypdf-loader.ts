import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { DocumentLoaderService } from '../../services/document-loader-service';
import { DocumentFile, DocumentFileWithPageNo } from '../../models/document_loaders_model';


@Component({
  selector: 'app-pypdf-loader',
  standalone: false,
  templateUrl: './pypdf-loader.html',
  styleUrl: './pypdf-loader.css',
})
export class PypdfLoader {
  constructor(private documentLoaderService: DocumentLoaderService) { }
  fb = inject(FormBuilder)
  summaryForm = this.fb.group(
    {
      topicForSummary: ['', [Validators.required]],
      pageNo : [1,[Validators.required, Validators.min(1)]]
    });
  summaryResponseForm = this.fb.group(
    {
      summaryResponse: ['', []],
       noOfDocs: ['',[]]

    });
  summaryResponse$: Observable<any> | undefined = of("temp");
  doGenerateSummary() {
    this.summaryResponse$ = this.documentLoaderService.readPDFFile(new DocumentFileWithPageNo(this.summaryForm?.controls?.topicForSummary?.value, this.summaryForm?.controls?.pageNo?.value));
    this.summaryResponse$?.subscribe({
      next: (data: any) => {
        if (data?.model_response != '') {
          this.summaryResponseForm.controls.summaryResponse.setValue(data?.model_response);
        this.summaryResponseForm.controls.noOfDocs.setValue(data?.no_of_docs);
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
