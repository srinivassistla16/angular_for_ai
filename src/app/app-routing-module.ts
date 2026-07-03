import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelMain } from './model-interaction/model-main/model-main';
import { CommonChatModel } from './model-interaction/common-chat-model/common-chat-model';
import { EmbeddingsMain } from './embedding-models/embeddings-main/embeddings-main';
import { CommonEmbeddingModel } from './embedding-models/common-embedding-model/common-embedding-model';
import { ChatbotMain } from './chatbot/chatbot-main/chatbot-main';
import { CommonChatbot } from './chatbot/common-chatbot/common-chatbot';
import { PromtsMain } from './dynamic-prompts/promts-main/promts-main';
import { CommonPromptCalls } from './dynamic-prompts/common-prompt-calls/common-prompt-calls';

const routes: Routes = [
  { path: '', redirectTo: "/models-main", pathMatch: 'full' },
  {
    path: 'models-main', component: ModelMain, title: 'Models Main Page',
    children: [
      { path: 'common/:modelname', component: CommonChatModel }
    ]
  },
  {
    path: 'embeddings-main', component: EmbeddingsMain, title: 'Embedding Main',
    children: [
      { path: 'common-embedding/:modelname', component: CommonEmbeddingModel }
    ]
  },
  {
    path: 'prompts-main', component: PromtsMain, title: 'Prompts Main',
    children: [
      { path: 'common-prompt/:modelname', component: CommonPromptCalls }
    ]
  },
  {
    path: 'chatbot-main', component: ChatbotMain, title: 'Chatbot Main',
    children: [
      { path: 'common-chatbot/:modelname', component: CommonChatbot }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
