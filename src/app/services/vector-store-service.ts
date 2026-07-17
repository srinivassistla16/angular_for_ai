import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocListForVectorStore } from '../models/vector_store_model';
import { SimpleQuery } from '../models/chat_input_model';

@Injectable({
  providedIn: 'root',
})
export class VectorStoreService {

  private apiUrl = '/api';
  constructor(private http: HttpClient) { }

  doStoreDocsInVectorStore(modelType: string | null, docListForVectorStore: DocListForVectorStore): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/vectorstore/" + modelType + "/store", docListForVectorStore);
  }

  doSimilaritySearch(modelType: string | null, simpleQuery: SimpleQuery) {
    return this.http.post<any>(this.apiUrl + "/vectorstore/" + modelType + "/similaritysearch", simpleQuery);
  }

}
