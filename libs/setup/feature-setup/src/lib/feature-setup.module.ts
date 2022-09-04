import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureSetupComponent } from './feature-setup.component';
import { UiSetupFormModule } from '@budget-smudget/setup/ui-setup-form';

@NgModule({
  imports: [
    CommonModule,
    UiSetupFormModule
  ],
  declarations: [FeatureSetupComponent],
  exports: [FeatureSetupComponent]
})
export class SetupFeatureSetupModule {}
