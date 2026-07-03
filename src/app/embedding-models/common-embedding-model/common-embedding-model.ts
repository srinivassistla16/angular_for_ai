import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { SimpleQuery } from '../../models/chat_input_model';
import { EmbeddingModelsService } from '../../services/embedding-models-service';
import { DocList, DocSearchModel } from '../../models/embedding_input_model';

@Component({
  selector: 'app-common-embedding-model',
  standalone: false,
  templateUrl: './common-embedding-model.html',
  styleUrl: './common-embedding-model.css',
})
export class CommonEmbeddingModel {
  constructor(private route: ActivatedRoute, private embeddingModelsService: EmbeddingModelsService) { }

  modelName: string | null = "";

  ngOnInit() {
    // this.modelName = this.route.snapshot.paramMap.get('modelname');
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.modelName = params.get('modelname')
    });
  }
  fb = inject(FormBuilder)
  queryForm = this.fb.group(
    {
      query: ['Capital of India is New Delhi', [Validators.required]],

    });
  responseForm = this.fb.group(
    {
      response: ['', []],

    });

  queryResponse$: Observable<any> | undefined = of("temp");
  doSubmitQuery() {
    this.queryResponse$ = this.embeddingModelsService.doEmbeddingSimpleQuery(this.modelName, this.doConstructQuery());

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

  doConstructQuery() {
    let simpleQuery = new SimpleQuery(this.queryForm?.controls?.query?.value)
    return simpleQuery;
  }

  multiDocForm = this.fb.group(
    {
      doc1: ['Capital of India is New Delhi', [Validators.required]],
      doc2: ['Capital of France is Paris', [Validators.required]],
      doc3: ['Capital of Bangladesh is Dhaka', [Validators.required]],
      doc4: ['Capital of USA is Washigton DC', [Validators.required]]
    });

  embedmentResponseForm = this.fb.group(
    {
      embedment: ['']
    });

  embedResponse$: Observable<any> | undefined = of("temp");
  doSubmitDocs() {
    this.embedResponse$ = this.embeddingModelsService.doDocsListEmbedding(this.modelName, this.doConstructEmbedList());

    this.embedResponse$?.subscribe({
      next: (data: any) => {
        if (data?.model_response != '') {
          this.embedmentResponseForm.controls.embedment.setValue(data?.model_response);
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

  doConstructEmbedList() {
    let docList:string[]= []
    if (this.multiDocForm?.controls?.doc1?.value != null) {
      docList.push(this.multiDocForm?.controls?.doc1?.value)
    }
    if (this.multiDocForm?.controls?.doc2?.value != null) {
      docList.push(this.multiDocForm?.controls?.doc2?.value)
    }
    if (this.multiDocForm?.controls?.doc3?.value != null) {
      docList.push(this.multiDocForm?.controls?.doc3?.value)
    }
    if (this.multiDocForm?.controls?.doc4?.value != null) {
      docList.push(this.multiDocForm?.controls?.doc4?.value)
    }
    return new DocList(docList);

  }

  similarityForm = this.fb.group(
    {
      sentence: ['Tell me about India', [Validators.required]],

    });
  similarityResponseForm = this.fb.group(
    {
      similarity: ['', []],
      matchingdoc: ['', []]

    });
    consineSimilarity$: Observable<any> | undefined = of("temp");
    getCosines() {
       this.consineSimilarity$ = this.embeddingModelsService.doGetCosines(this.modelName, this.doConstructDocSearchModel());

    this.consineSimilarity$?.subscribe({
      next: (data: any) => {
        if (data?.model_response != '') {
          this.similarityResponseForm.controls.similarity.setValue(data?.model_response);
          this.similarityResponseForm.controls.matchingdoc.setValue(data?.similar_sentence);
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

    doConstructDocSearchModel() {

      let docsList = this.doConstructEmbedList();
      let sentence = this.similarityForm?.controls?.sentence?.value;
      return new DocSearchModel(docsList.docs, sentence);
    }

}
