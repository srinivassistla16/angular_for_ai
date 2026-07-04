import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PromptDataModel } from '../models/prompts_model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DynamicPromptService {
  private apiUrl = '/api';
  constructor(private http: HttpClient) { }

  doGenerate(modelType: string | null, promptDataModel: PromptDataModel): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/prompting/" + modelType + "/promptcall", promptDataModel);
  }

}
