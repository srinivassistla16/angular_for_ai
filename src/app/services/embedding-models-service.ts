import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SimpleQuery } from '../models/chat_input_model';
import { Observable } from 'rxjs';
import { DocList, DocSearchModel } from '../models/embedding_input_model';

@Injectable({
  providedIn: 'root',
})
export class EmbeddingModelsService {
  private apiUrl = '/api';
  constructor(private http: HttpClient) { }

  doEmbeddingSimpleQuery(modelType:string | null ,simpleQuery: SimpleQuery): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/embeddings/"+modelType+"/simplequery", simpleQuery);
  }

   doDocsListEmbedding(modelType:string | null ,docList: DocList): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/embeddings/"+modelType+"/docslist", docList);
  }

  doGetCosines(modelType:string | null ,docSearchModel: DocSearchModel): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/embeddings/"+modelType+"/similaritysearch", docSearchModel);
  }

}
