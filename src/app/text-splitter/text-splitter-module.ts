import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing-module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { RecursiveCharTextSplitter } from './recursive-char-text-splitter/recursive-char-text-splitter';
import { TextSplitterMain } from './text-splitter-main/text-splitter-main';
import { TextSplitterTabs } from './text-splitter-tabs/text-splitter-tabs';



@NgModule({
  declarations: [
    RecursiveCharTextSplitter,
    TextSplitterMain,
    TextSplitterTabs
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
export class TextSplitterModule { }
