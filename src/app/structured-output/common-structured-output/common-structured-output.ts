import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { StructuredOutputService } from '../../services/structured-output-service';
import { UserComment } from '../model/structured-output-input-model';

@Component({
  selector: 'app-common-structured-output',
  standalone: false,
  templateUrl: './common-structured-output.html',
  styleUrl: './common-structured-output.css',
})
export class CommonStructuredOutput {

  constructor(private route: ActivatedRoute, private structuredOutputService: StructuredOutputService) { }

  method: string | null = "";

  ngOnInit() {
    // this.modelName = this.route.snapshot.paramMap.get('modelname');
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.method = params.get('method')
    });
  }

  fb = inject(FormBuilder)


longtext = `I recently upgraded to the Samsung Galaxy S24 Ultra, and I must say, it’s an absolute powerhouse! The Snapdragon 8 Gen 3 processor makes everything lightning fast—whether I’m gaming, multitasking, or editing photos. The 5000mAh battery easily lasts a full day even with heavy use, and the 45W fast charging is a lifesaver.\n
The S-Pen integration is a great touch for note-taking and quick sketches, though I don't use it often. What really blew me away is the 200MP camera—the night mode is stunning, capturing crisp, vibrant images even in low light. Zooming up to 100x actually works well for distant objects, but anything beyond 30x loses quality.\n

However, the weight and size make it a bit uncomfortable for one-handed use. Also, Samsung’s One UI still comes with bloatware—why do I need five different Samsung apps for things Google already provides? The $1,300 price tag is also a hard pill to swallow.

Pros:
Insanely powerful processor (great for gaming and productivity)
Stunning 200MP camera with incredible zoom capabilities
Long battery life with fast charging
S-Pen support is unique and useful
                                 
Review by Srinivas Sistla`;
  userCommentForm = this.fb.group(
    {
      user_comment: [this.longtext, [Validators.required]],

    });


  reviewResponseForm = this.fb.group(
    {
      response: ['', []],

    });

  reviewResponse$: Observable<any> | undefined = of("temp");
  doSubmitReview() {
    this.reviewResponse$ = this.structuredOutputService.getSummaryAndSentiment(this.method, this.doConstructUserComment());

    this.reviewResponse$?.subscribe({
      next: (data: any) => {
        if (data?.model_response != '') {
          this.reviewResponseForm.controls.response.setValue(data?.model_response);
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

  doConstructUserComment() {
    let userComment = new UserComment(this.userCommentForm?.controls?.user_comment?.value)
    return userComment;
  }
}
