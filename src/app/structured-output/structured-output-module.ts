import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuredOutputMain } from './structured-output-main/structured-output-main';
import { StructuredOutputTabs } from './structured-output-tabs/structured-output-tabs';
import { CommonStructuredOutput } from './common-structured-output/common-structured-output';
import { AppRoutingModule } from '../app-routing-module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    StructuredOutputMain,
    StructuredOutputTabs,
    CommonStructuredOutput
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
export class StructuredOutputModule { }
