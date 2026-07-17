import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VectorStroreMain } from './vector-strore-main/vector-strore-main';
import { VectorStoreTabs } from './vector-store-tabs/vector-store-tabs';
import { VectorStoreChroma } from './vector-store-chroma/vector-store-chroma';
import { AppRoutingModule } from '../app-routing-module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    VectorStroreMain,
    VectorStoreTabs,
    VectorStoreChroma
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
export class VectorStoreModule { }
