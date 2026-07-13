import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { ModelInteractionModule } from './model-interaction/model-interaction-module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { EmbeddingModelsModule } from './embedding-models/embedding-models-module';
import { ChatbotModule } from './chatbot/chatbot-module';
import { DynamicPromptsModule } from './dynamic-prompts/dynamic-prompts-module';
import { StructuredOutputModule } from './structured-output/structured-output-module';
import { OutputParsersModule } from './output-parsers/output-parsers-module';
import { ChainsModule } from './chains/chains-module';
import { DocumentLoaderModule } from './document-loader/document-loader-module';
import { TextSplitterModule } from './text-splitter/text-splitter-module';

@NgModule({
  declarations: [
    App,
    Header
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelInteractionModule,
    EmbeddingModelsModule,
    DynamicPromptsModule,
    ChatbotModule,
    StructuredOutputModule,
    OutputParsersModule,
    ChainsModule,
    DocumentLoaderModule,
    TextSplitterModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()) 
  ],
  bootstrap: [App]
})
export class AppModule { }
