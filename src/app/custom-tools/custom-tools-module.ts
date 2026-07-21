import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing-module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { CustomToolsMain } from './custom-tools-main/custom-tools-main';
import { CustomToolsTabs } from './custom-tools-tabs/custom-tools-tabs';
import { CommonCustomTool } from './common-custom-tool/common-custom-tool';



@NgModule({
  declarations: [
    CustomToolsMain,
    CustomToolsTabs,
    CommonCustomTool
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
export class CustomToolsModule { }
