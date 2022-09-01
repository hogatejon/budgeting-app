import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureSetupComponent } from './feature-setup.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FeatureSetupComponent],
  exports: [FeatureSetupComponent]
})
export class SetupFeatureSetupModule {}
