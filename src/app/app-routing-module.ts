import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelMain } from './model-interaction/model-main/model-main';
import { OpenaiChatModel } from './model-interaction/openai-chat-model/openai-chat-model';
import { GeminiChatModel } from './model-interaction/gemini-chat-model/gemini-chat-model';
import { HfChatModel } from './model-interaction/hf-chat-model/hf-chat-model';

const routes: Routes = [
  { path: '', redirectTo: "/models-main", pathMatch: 'full'},
  { path: 'models-main', component: ModelMain, title: 'Models Main Page',
    children: [
      {path: 'openai', component: OpenaiChatModel, title: 'OpenAI'},
      {path: 'gemini', component: GeminiChatModel, title: 'Gemini'},
      {path: 'hf', component: HfChatModel, title: 'Hugging Face'}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled' // or 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
