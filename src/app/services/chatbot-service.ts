import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatRequest } from '../models/chatbot_model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  
  private apiUrl = '/api';
  constructor(private http: HttpClient) { }

  doQuery(modelType:string | null ,chatRequest: ChatRequest): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/chatbot/"+modelType, chatRequest);
  }

}
