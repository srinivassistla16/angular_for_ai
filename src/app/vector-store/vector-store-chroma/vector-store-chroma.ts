import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { SimpleQuery } from '../../models/chat_input_model';
import { EmbeddingModelsService } from '../../services/embedding-models-service';
import { DocList, DocSearchModel } from '../../models/embedding_input_model';
import { VectorStoreService } from '../../services/vector-store-service';
import { DocListForVectorStore } from '../../models/vector_store_model';


@Component({
  selector: 'app-vector-store-chroma',
  standalone: false,
  templateUrl: './vector-store-chroma.html',
  styleUrl: './vector-store-chroma.css',
})
export class VectorStoreChroma {
  constructor(private route: ActivatedRoute, private embeddingModelsService: EmbeddingModelsService, private vectorStoreService : VectorStoreService) { }

  modelName: string | null = "";

  ngOnInit() {
    // this.modelName = this.route.snapshot.paramMap.get('modelname');
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.modelName = params.get('modelname')
    });
  }
  fb = inject(FormBuilder)


  multiDocForm = this.fb.group(
    {
      doc1: ['New Delhi is in India. It is the capital city of India', [Validators.required]],
      metadata1: ['About New Delhi', [Validators.required]],
      doc2: ['The fasion city is Paris. People speak French there', [Validators.required]],
      metadata2: ['About Paris', [Validators.required]],
      doc3: ['Bangaldesh is evolving as industrial Country, Its capital is Dhaka', [Validators.required]],
      metadata3: ['About Bangaldesh country', [Validators.required]],
      doc4: ['USA is technically advanced. Many invensions takes place there. The indepence day is July 4th', [Validators.required]],
      metadata4: ['About USA', [Validators.required]],
    });

  embedmentResponseForm = this.fb.group(
    {
      embedment: ['']
    });

  embedResponse$: Observable<any> | undefined = of("temp");
  doSubmitDocs() {
    this.embedResponse$ = this.vectorStoreService.doStoreDocsInVectorStore(this.modelName, this.doConstructDocListObj());

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

doConstructDocListObj() {
  //part 1
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
    // part 2
    let metadataList:string[]= []
    if (this.multiDocForm?.controls?.metadata1?.value != null) {
      metadataList.push(this.multiDocForm?.controls?.metadata1?.value)
    }
    if (this.multiDocForm?.controls?.metadata2?.value != null) {
      metadataList.push(this.multiDocForm?.controls?.metadata2?.value)
    }
    if (this.multiDocForm?.controls?.metadata3?.value != null) {
      metadataList.push(this.multiDocForm?.controls?.metadata3?.value)
    }
    if (this.multiDocForm?.controls?.metadata4?.value != null) {
      metadataList.push(this.multiDocForm?.controls?.metadata4?.value)
    }
    return new DocListForVectorStore(docList, metadataList);
  }


  similarityForm = this.fb.group(
    {
      sentence: ['Tell me about India', [Validators.required]],

    });
  similarityResponseForm = this.fb.group(
    {
      similarity: ['', []],
      similarityWithScore: ['', []]

    });
    similariritySearch$: Observable<any> | undefined = of("temp");
    getCosines() {
       this.similariritySearch$ = this.vectorStoreService.doSimilaritySearch(this.modelName, new SimpleQuery(this.similarityForm?.controls?.sentence?.value));

    this.similariritySearch$?.subscribe({
      next: (data: any) => {
        if (data?.model_response != '') {
          this.similarityResponseForm.controls.similarity.setValue(data?.model_response);
          this.similarityResponseForm.controls.similarityWithScore.setValue(data?.similarity_with_score);
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
