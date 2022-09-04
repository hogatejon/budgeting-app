import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';

import { UiSetupFormComponent } from './ui-setup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ButtonModule,
    CommonModule,
    InputTextModule,
    PanelModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UiSetupFormComponent],
  exports: [UiSetupFormComponent]
})
export class UiSetupFormModule {}
