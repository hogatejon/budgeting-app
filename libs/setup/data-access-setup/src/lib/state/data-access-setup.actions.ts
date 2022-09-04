import { createAction, props } from '@ngrx/store';
import { DataAccessSetupEntity } from './data-access-setup.models';

export const initDataAccessSetup = createAction('[DataAccessSetup Page] Init');

export const loadDataAccessSetupSuccess = createAction(
  '[DataAccessSetup/API] Load DataAccessSetup Success',
  props<{ dataAccessSetup: DataAccessSetupEntity[] }>()
);

export const loadDataAccessSetupFailure = createAction(
  '[DataAccessSetup/API] Load DataAccessSetup Failure',
  props<{ error: any }>()
);
