import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing-module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { ToolCallingMain } from './tool-calling-main/tool-calling-main';
import { ToolCallingTabs } from './tool-calling-tabs/tool-calling-tabs';
import { ToolCallingMultiplier } from './tool-calling-multiplier/tool-calling-multiplier';
import { ToolCallingCurrencyConversion } from './tool-calling-currency-conversion/tool-calling-currency-conversion';



@NgModule({
  declarations: [
    ToolCallingMain,
    ToolCallingTabs,
    ToolCallingMultiplier,
    ToolCallingCurrencyConversion
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
export class ToolCallingModule { }
