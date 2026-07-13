import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentLoaderMain } from './document-loader-main/document-loader-main';
import { AppRoutingModule } from '../app-routing-module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { DocumentLoaderTabs } from './document-loader-tabs/document-loader-tabs';
import { TextLoader } from './text-loader/text-loader';
import { PypdfLoader } from './pypdf-loader/pypdf-loader';
import { WebbaseLoader } from './webbase-loader/webbase-loader';
import { CsvLoader } from './csv-loader/csv-loader';
import { DocumentUploader } from './document-uploader/document-uploader';
import { DirectoryLoader } from './directory-loader/directory-loader';



@NgModule({
  declarations: [
    DocumentLoaderMain,
    DocumentLoaderTabs,
    TextLoader,
    PypdfLoader,
    WebbaseLoader,
    CsvLoader,
    DocumentUploader,
    DirectoryLoader
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatIconModule,
    FormsModule
  ]
})
export class DocumentLoaderModule { }
