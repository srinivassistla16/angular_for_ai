import { Injectable } from '@angular/core';
import { SimpleQuery } from '../models/chat_input_model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RetrieverService {

  private apiUrl = '/api';
  constructor(private http: HttpClient) { }

  retrieveFromWikipedia(simpleQuery: SimpleQuery): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/retriever/wikipediaretriever", simpleQuery);
  }

}
