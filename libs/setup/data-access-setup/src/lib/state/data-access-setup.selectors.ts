import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  DATA_ACCESS_SETUP_FEATURE_KEY,
  DataAccessSetupState,
  dataAccessSetupAdapter,
} from './data-access-setup.reducer';

// Lookup the 'DataAccessSetup' feature state managed by NgRx
export const getDataAccessSetupState =
  createFeatureSelector<DataAccessSetupState>(DATA_ACCESS_SETUP_FEATURE_KEY);

const { selectAll, selectEntities } = dataAccessSetupAdapter.getSelectors();

export const getDataAccessSetupLoaded = createSelector(
  getDataAccessSetupState,
  (state: DataAccessSetupState) => state.loaded
);

export const getDataAccessSetupError = createSelector(
  getDataAccessSetupState,
  (state: DataAccessSetupState) => state.error
);

export const getAllDataAccessSetup = createSelector(
  getDataAccessSetupState,
  (state: DataAccessSetupState) => selectAll(state)
);

export const getDataAccessSetupEntities = createSelector(
  getDataAccessSetupState,
  (state: DataAccessSetupState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getDataAccessSetupState,
  (state: DataAccessSetupState) => state.selectedId
);

export const getSelected = createSelector(
  getDataAccessSetupEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
