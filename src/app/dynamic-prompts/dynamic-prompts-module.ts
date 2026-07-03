import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromtsMain } from './promts-main/promts-main';
import { PromtsTabs } from './promts-tabs/promts-tabs';
import { CommonPromptCalls } from './common-prompt-calls/common-prompt-calls';
import { AppRoutingModule } from '../app-routing-module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    PromtsMain,
    PromtsTabs,
    CommonPromptCalls
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
export class DynamicPromptsModule { }
