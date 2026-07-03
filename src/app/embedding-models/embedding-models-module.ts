import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbeddingsMain } from './embeddings-main/embeddings-main';
import { EmbeddingsTabs } from './embeddings-tabs/embeddings-tabs';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing-module';
import { CommonEmbeddingModel } from './common-embedding-model/common-embedding-model';



@NgModule({
  declarations: [
    EmbeddingsMain,
    EmbeddingsTabs,
    CommonEmbeddingModel
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
export class EmbeddingModelsModule { }
