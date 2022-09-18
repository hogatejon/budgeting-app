import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureSetupComponent } from './feature-setup.component';
import { PanelModule } from 'primeng/panel';
import { UiIncomeSourceModule } from '@budget-smudget/setup/ui-income-source';
import { FeatureSetupStore } from './feature-setup.store';

@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    UiIncomeSourceModule
  ],
  declarations: [FeatureSetupComponent],
  exports: [FeatureSetupComponent],
  providers: [ FeatureSetupStore ]
})
export class SetupFeatureSetupModule {}
