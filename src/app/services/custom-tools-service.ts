import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MultiplyModel } from '../models/multiply_input_model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomToolsService {

  private apiUrl = '/api';
  constructor(private http: HttpClient) { }

    getCustomToolMultiplyResponse(modeOfTool: string | null, multiplyModel: MultiplyModel): Observable<any> {
      return this.http.post<any>(this.apiUrl + "/customtool/" + modeOfTool + "/call", multiplyModel);
    }
  
}
