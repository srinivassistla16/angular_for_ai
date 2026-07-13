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
import { ChainsMain } from './chains/chains-main/chains-main';
import { SequentialChain } from './chains/sequential-chain/sequential-chain';
import { ParallelChain } from './chains/parallel-chain/parallel-chain';
import { ConditionalChain } from './chains/conditional-chain/conditional-chain';
import { DocumentLoaderMain } from './document-loader/document-loader-main/document-loader-main';
import { TextLoader } from './document-loader/text-loader/text-loader';
import { PypdfLoader } from './document-loader/pypdf-loader/pypdf-loader';
import { WebbaseLoader } from './document-loader/webbase-loader/webbase-loader';
import { CsvLoader } from './document-loader/csv-loader/csv-loader';
import { DirectoryLoader } from './document-loader/directory-loader/directory-loader';
import { TextSplitterMain } from './text-splitter/text-splitter-main/text-splitter-main';
import { RecursiveCharTextSplitter } from './text-splitter/recursive-char-text-splitter/recursive-char-text-splitter';

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
  },
{
    path: 'chains-main', component: ChainsMain, title: 'Chains Main',
    children: [
      { path: 'sequential-chain', component: SequentialChain },
      { path: 'parallel-chain', component: ParallelChain },
      { path: 'conditional-chain', component: ConditionalChain }
     
    ]
  },
  {
    path: 'document-loader-main', component: DocumentLoaderMain, title: 'Document Loader Main',
    children: [
      { path: 'text-loader', component: TextLoader },
      { path: 'pypdf-loader', component: PypdfLoader },
      { path: 'directory-loader', component: DirectoryLoader },
      { path: 'webbase-loader', component: WebbaseLoader },
      { path: 'csv-loader', component: CsvLoader }
    ]
  },
  {
    path: 'text-splitter-main', component: TextSplitterMain, title: 'Text Splitter Main',
    children: [
      { path: 'recursive-char-text-splitter', component: RecursiveCharTextSplitter }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
