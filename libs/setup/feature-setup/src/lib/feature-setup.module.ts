import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureSetupComponent } from './feature-setup.component';
import { PanelModule } from 'primeng/panel';
import { FeatureSetupStore } from './feature-setup.store';
import { ButtonModule } from 'primeng/button'
import { StepsModule } from 'primeng/steps'
import { UiExpectedIncomeModule } from '@budget-smudget/setup/ui-expected-income';

@NgModule({
  imports: [
    ButtonModule,
    CommonModule,
    PanelModule,
    StepsModule,
    UiExpectedIncomeModule
  ],
  declarations: [FeatureSetupComponent],
  exports: [FeatureSetupComponent],
  providers: [ FeatureSetupStore ]
})
export class SetupFeatureSetupModule {}
