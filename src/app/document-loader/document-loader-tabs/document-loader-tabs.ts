import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-document-loader-tabs',
  standalone: false,
  templateUrl: './document-loader-tabs.html',
  styleUrl: './document-loader-tabs.css',
})
export class DocumentLoaderTabs {
    
  constructor(private router: Router, private route: ActivatedRoute) { }

  isTextLoaderActive = false;
  isPyPDFLoaderActive = false;
  isDirectoryLoaderActive = false;
  isWebBaseLoaderActive = false;
  isCSVLoaderActive = false;
  headerSubText = "";

  navigateToTextLoader() {
    if (!this.isTextLoaderActive) {
      this.isTextLoaderActive = true;
      this.isPyPDFLoaderActive = false;
      this.isDirectoryLoaderActive = false;
      this.isWebBaseLoaderActive = false;
      this.isCSVLoaderActive = false;
      this.headerSubText = "- TextLoader";
      this.router.navigate(['/document-loader-main/text-loader'], { relativeTo: this.route});
    }
  }

  navigateToPyPDFLoader() {
      if (!this.isPyPDFLoaderActive) {
      this.isTextLoaderActive = false;
      this.isPyPDFLoaderActive = true;
      this.isDirectoryLoaderActive = false;
      this.isWebBaseLoaderActive = false;
      this.isCSVLoaderActive = false;
      this.headerSubText = "- PyPDFLoader";
      this.router.navigate(['/document-loader-main/pypdf-loader'], { relativeTo: this.route});
    }
  }

  navigateToDirectoryLoader() {
      if (!this.isDirectoryLoaderActive) {
      this.isTextLoaderActive = false;
      this.isPyPDFLoaderActive = false;
      this.isDirectoryLoaderActive = true;
      this.isWebBaseLoaderActive = false;
      this.isCSVLoaderActive = false;
      this.headerSubText = "- DirectoryLoader";
      this.router.navigate(['/document-loader-main/directory-loader'], { relativeTo: this.route});
    }

  }

  navigateToWebBaseLoader() {
      if (!this.isWebBaseLoaderActive) {
      this.isTextLoaderActive = false;
      this.isPyPDFLoaderActive = false;
      this.isDirectoryLoaderActive = false;
      this.isWebBaseLoaderActive = true;
      this.isCSVLoaderActive = false;
      this.headerSubText = "- WebBaseLoader";
      this.router.navigate(['/document-loader-main/webbase-loader'], { relativeTo: this.route});
    }
  }

  navigateToCSVLoader() {
      if (!this.isCSVLoaderActive) {
      this.isTextLoaderActive = false;
      this.isPyPDFLoaderActive = false;
      this.isDirectoryLoaderActive = false;
      this.isWebBaseLoaderActive = false;
      this.isCSVLoaderActive = true;
      this.headerSubText = "- CSVLoader";
      this.router.navigate(['/document-loader-main/csv-loader'], { relativeTo: this.route});
    }
  }

}
