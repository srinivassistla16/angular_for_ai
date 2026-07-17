import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RetrieverService } from '../../services/retriever-service';
import { Observable, of } from 'rxjs';
import { SimpleQuery } from '../../models/chat_input_model';

@Component({
  selector: 'app-wikipedia-retriever',
  standalone: false,
  templateUrl: './wikipedia-retriever.html',
  styleUrl: './wikipedia-retriever.css',
})
export class WikipediaRetriever {
 constructor(private route: ActivatedRoute, private retrieverService: RetrieverService) { }


  fb = inject(FormBuilder)
  
    similarityForm = this.fb.group(
    {
      sentence: ['Tell me about India', [Validators.required]],

    });
  similarityResponseForm = this.fb.group(
    {
      similarity: ['', []],
    });

    similariritySearch$: Observable<any> | undefined = of("temp");
    getCosines() {
       this.similariritySearch$ = this.retrieverService.retrieveFromWikipedia(new SimpleQuery(this.similarityForm?.controls?.sentence?.value));

    this.similariritySearch$?.subscribe({
      next: (data: any) => {
        if (data?.model_response != '') {
          this.similarityResponseForm.controls.similarity.setValue(data?.model_response);
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
