import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { ModelInteractionModule } from './model-interaction/model-interaction-module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Header
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelInteractionModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()) 
  ],
  bootstrap: [App]
})
export class AppModule { }
