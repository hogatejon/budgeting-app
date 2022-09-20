import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiExpectedIncomeComponent } from './ui-expected-income.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { UiIncomeSourceModule } from '@budget-smudget/setup/ui-income-source';

@NgModule({
  imports: [
    ButtonModule,
    PanelModule,
    CommonModule,
    UiIncomeSourceModule
  ],
  declarations: [UiExpectedIncomeComponent],
  exports: [UiExpectedIncomeComponent]
})
export class UiExpectedIncomeModule {}
