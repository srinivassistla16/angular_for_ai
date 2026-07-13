import { Injectable } from '@angular/core';
import { DocumentFile } from '../models/document_loaders_model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TextSplitterService {

  private apiUrl = '/api';
  constructor(private http: HttpClient) { }

splitFile(documentFile: DocumentFile): Observable<any> {
  return this.http.post<any>(this.apiUrl + "/textsplitter/recursivechartextsplitter", documentFile);
}
  
}
