import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutputParserMain } from './output-parser-main/output-parser-main';
import { OutputParserTabs } from './output-parser-tabs/output-parser-tabs';
import { StringOutputParser } from './string-output-parser/string-output-parser';
import { AppRoutingModule } from '../app-routing-module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { JsonOutputParser } from './json-output-parser/json-output-parser';
import { StructuredOutputParser } from './structured-output-parser/structured-output-parser';
import { PydanticOutputParser } from './pydantic-output-parser/pydantic-output-parser';



@NgModule({
  declarations: [
    OutputParserMain,
    OutputParserTabs,
    StringOutputParser,
    JsonOutputParser,
    StructuredOutputParser,
    PydanticOutputParser
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
export class OutputParsersModule { }
