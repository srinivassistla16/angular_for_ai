import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleQuery } from '../models/chat_input_model';

@Injectable({
  providedIn: 'root',
})
export class ToolCallingService {

    private apiUrl = '/api';
  constructor(private http: HttpClient) { }

multiplyToolCall(simpleQuery: SimpleQuery): Observable<any> {
  return this.http.post<any>(this.apiUrl + "/toolcallingbasic/multiplier", simpleQuery);
}
  
}