import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentFile, DocumentFileWithPageNo } from '../models/document_loaders_model';

@Injectable({
  providedIn: 'root',
})
export class DocumentLoaderService {
 private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  upload(file: File): Observable<any> {
    const formData = new FormData();
    // The key 'file' must match the parameter name in the FastAPI endpoint
    formData.append('file', file, file.name);
    return this.http.post(this.apiUrl + "/upload_file", formData);
  }


   readTextFile(documentFile: DocumentFile): Observable<any> {
      return this.http.post<any>(this.apiUrl + "/documentloader/textloader", documentFile);
    }
  readPDFFile(documentFileWithPageNo: DocumentFileWithPageNo): Observable<any> {
      return this.http.post<any>(this.apiUrl + "/documentloader/pdfloader", documentFileWithPageNo);
    }

    
}
