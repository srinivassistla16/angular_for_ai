import { Injectable } from '@angular/core';
import { Review } from '../models/structured_output_typeddict_model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserComment } from '../structured-output/model/structured-output-input-model';

@Injectable({
  providedIn: 'root',
})
export class StructuredOutputService {

  private apiUrl = '/api';
  constructor(private http: HttpClient) { }

  getSummaryAndSentiment(method: string | null, userComment: UserComment): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/structuredoutput/" + method + "/call", userComment);
  }

}
