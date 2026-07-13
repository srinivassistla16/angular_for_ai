import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParserModel } from '../models/output_parsers_model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ChainsService {

  private apiUrl = '/api';
  constructor(private http: HttpClient) { }

  doGetSummaryFromSequentialChain(parserModel: ParserModel): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/chains/sequential/summary", parserModel);
  }

   doGetSummaryFromParallelChain(parserModel: ParserModel): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/chains/parallel/summary", parserModel);
  }
}
