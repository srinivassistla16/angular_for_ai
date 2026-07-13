import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChainsMain } from './chains-main/chains-main';
import { ChainsTabs } from './chains-tabs/chains-tabs';
import { SequentialChain } from './sequential-chain/sequential-chain';
import { ParallelChain } from './parallel-chain/parallel-chain';
import { ConditionalChain } from './conditional-chain/conditional-chain';
import { AppRoutingModule } from '../app-routing-module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ChainsMain,
    ChainsTabs,
    SequentialChain,
    ParallelChain,
    ConditionalChain
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
export class ChainsModule { }
