import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetrieverMain } from './retriever-main/retriever-main';
import { RetrieverTabs } from './retriever-tabs/retriever-tabs';
import { AppRoutingModule } from '../app-routing-module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { WikipediaRetriever } from './wikipedia-retriever/wikipedia-retriever';



@NgModule({
  declarations: [
    RetrieverMain,
    RetrieverTabs,
    WikipediaRetriever
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
export class RetrieverModule { }
