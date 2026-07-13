import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParserModel } from '../models/output_parsers_model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class OutputParsersService {
  private apiUrl = '/api';
  constructor(private http: HttpClient) { }

  doGetDetailsFromParser(parserModel: ParserModel): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/outputparsers/stroutputparser/detail", parserModel);
  }

  doGetSummaryFromParser(parserModel: ParserModel): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/outputparsers/stroutputparser/summary", parserModel);
  }

  doGetDetailsFromJsonParser(parserModel: ParserModel): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/outputparsers/jsonoutputparser/detail", parserModel);
  }

    doSentimentAnalysisWithPydanticParser(parserModel: ParserModel): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/outputparsers/pydanticoutputparser/sentiment", parserModel);
  }

}
