import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDataAccessSetup from './state/data-access-setup.reducer';
import { DataAccessSetupEffects } from './state/data-access-setup.effects';
import { DataAccessSetupFacade } from './state/data-access-setup.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromDataAccessSetup.DATA_ACCESS_SETUP_FEATURE_KEY,
      fromDataAccessSetup.dataAccessSetupReducer
    ),
    EffectsModule.forFeature([DataAccessSetupEffects]),
  ],
  providers: [DataAccessSetupFacade],
})
export class DataAccessSetupModule {}
