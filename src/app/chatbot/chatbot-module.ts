import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing-module';

import { ChatbotMain } from './chatbot-main/chatbot-main';
import { CommonChatbot } from './common-chatbot/common-chatbot';
import { ChatbotTabs } from './chatbot-tabs/chatbot-tabs';



@NgModule({
  declarations: [
    ChatbotMain,
    CommonChatbot,
    ChatbotTabs
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
export class ChatbotModule { }
