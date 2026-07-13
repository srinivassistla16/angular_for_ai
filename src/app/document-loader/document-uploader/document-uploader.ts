import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DocumentLoaderService } from '../../services/document-loader-service';
import { of } from 'rxjs';

@Component({
  selector: 'app-document-uploader',
  standalone: false,
  templateUrl: './document-uploader.html',
  styleUrl: './document-uploader.css',
})
export class DocumentUploader {
  constructor(private documentLoaderService: DocumentLoaderService, private cdr: ChangeDetectorRef) { }

  fb = inject(FormBuilder)
  fileUploadForm = this.fb.group(
    {
      formFile: [null, []],
      fileNameDisplayOnly: ["", []]
    });


  fileToUpload: File | null = null;
  onFileSelected(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.fileToUpload = files[0];
      if (this.fileToUpload != null && this.fileToUpload?.size > 10000000) {
        alert("File Size Permitted 10MB")
        this.fileToUpload = null;
        return;
      }
      console.log('File selected:', this.fileToUpload?.name);
      // You can now proceed to upload this.selectedFile
    } else {
      this.fileToUpload = null;
    }
  }
  
  fileUpload$: any = of("temp")
  uploadFile() {
    if (this.fileToUpload) {
      this.fileUpload$ = this.documentLoaderService.upload(this.fileToUpload);
      this.fileUpload$.subscribe({
        next: (data: any) => {
         this.fileUploadForm.controls.fileNameDisplayOnly.setValue(data?.filename);
         this.fileUploadForm.controls.formFile.setValue(null);
        this.fileToUpload = null;
 
          // Handle success (e.g., show a success message)
        },
        error: (error: any) => {
          console.error('Technical Issue. Please Contact Support Engineer!!', error);
          // Handle error
        },
        complete: () => {
          // Handle the completion event (optional)
          console.log('Observable completed');
        }
      });

    }
  }

}
