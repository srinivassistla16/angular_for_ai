import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModelMain } from './model-main/model-main';
import { ModelTabs } from './model-tabs/model-tabs';
import { AppRoutingModule } from '../app-routing-module';
import { RouterModule, Routes } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { OpenaiChatModel } from './openai-chat-model/openai-chat-model';
import { GeminiChatModel } from './gemini-chat-model/gemini-chat-model';
import { HfChatModel } from './hf-chat-model/hf-chat-model';
import { CommonChatModel } from './common-chat-model/common-chat-model';


@NgModule({
  declarations: [
    ModelMain,
    ModelTabs,
    OpenaiChatModel,
    GeminiChatModel,
    HfChatModel,
    CommonChatModel
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule, 
    ReactiveFormsModule,
    MatTooltipModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    ModelMain,
    ModelTabs
  ]
})
export class ModelInteractionModule { }
