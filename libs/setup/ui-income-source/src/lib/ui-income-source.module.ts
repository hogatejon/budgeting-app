import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

import { UiIncomeSourceComponent } from './ui-income-source.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ButtonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  declarations: [UiIncomeSourceComponent],
  exports: [UiIncomeSourceComponent]
})
export class UiIncomeSourceModule {}
