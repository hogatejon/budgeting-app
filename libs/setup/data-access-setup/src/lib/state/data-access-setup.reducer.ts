import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as DataAccessSetupActions from './data-access-setup.actions';
import { DataAccessSetupEntity } from './data-access-setup.models';

export const DATA_ACCESS_SETUP_FEATURE_KEY = 'dataAccessSetup';

export interface DataAccessSetupState
  extends EntityState<DataAccessSetupEntity> {
  selectedId?: string | number; // which DataAccessSetup record has been selected
  loaded: boolean; // has the DataAccessSetup list been loaded
  error?: string | null; // last known error (if any)
}

export interface DataAccessSetupPartialState {
  readonly [DATA_ACCESS_SETUP_FEATURE_KEY]: DataAccessSetupState;
}

export const dataAccessSetupAdapter: EntityAdapter<DataAccessSetupEntity> =
  createEntityAdapter<DataAccessSetupEntity>();

export const initialDataAccessSetupState: DataAccessSetupState =
  dataAccessSetupAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialDataAccessSetupState,
  on(DataAccessSetupActions.initDataAccessSetup, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    DataAccessSetupActions.loadDataAccessSetupSuccess,
    (state, { dataAccessSetup }) =>
      dataAccessSetupAdapter.setAll(dataAccessSetup, { ...state, loaded: true })
  ),
  on(DataAccessSetupActions.loadDataAccessSetupFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function dataAccessSetupReducer(
  state: DataAccessSetupState | undefined,
  action: Action
) {
  return reducer(state, action);
}
