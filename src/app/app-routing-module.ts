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
import { StructuredOutputMain } from './structured-output/structured-output-main/structured-output-main';
import { CommonStructuredOutput } from './structured-output/common-structured-output/common-structured-output';
import { OutputParserMain } from './output-parsers/output-parser-main/output-parser-main';
import { StringOutputParser } from './output-parsers/string-output-parser/string-output-parser';
import { JsonOutputParser } from './output-parsers/json-output-parser/json-output-parser';
import { StructuredOutputParser } from './output-parsers/structured-output-parser/structured-output-parser';
import { PydanticOutputParser } from './output-parsers/pydantic-output-parser/pydantic-output-parser';

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
  },
  {
    path: 'structured-output-main', component: StructuredOutputMain, title: 'Structured Output Main',
    children: [
      { path: 'common-structured-output/:method', component: CommonStructuredOutput }
    ]
  },
  {
    path: 'output-parsers-main', component: OutputParserMain, title: 'Output Parser Main',
    children: [
      { path: 'string-output-parser', component: StringOutputParser },
      { path: 'json-output-parser', component: JsonOutputParser },
      { path: 'structured-output-parser', component: StructuredOutputParser },
      { path: 'pydantic-output-parser', component: PydanticOutputParser }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
