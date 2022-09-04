import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';

import { UiSetupFormComponent } from './ui-setup-form.component';

@NgModule({
  imports: [
    CommonModule,
    PanelModule
  ],
  declarations: [UiSetupFormComponent],
  exports: [UiSetupFormComponent]
})
export class UiSetupFormModule {}
