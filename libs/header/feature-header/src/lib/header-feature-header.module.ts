import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureHeaderComponent } from './feature-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FeatureHeaderComponent],
  exports: [
    FeatureHeaderComponent
  ]
})
export class HeaderFeatureHeaderModule {}
