import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as DataAccessSetupActions from './data-access-setup.actions';
import * as DataAccessSetupFeature from './data-access-setup.reducer';
import * as DataAccessSetupSelectors from './data-access-setup.selectors';

@Injectable()
export class DataAccessSetupFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(
    select(DataAccessSetupSelectors.getDataAccessSetupLoaded)
  );
  allDataAccessSetup$ = this.store.pipe(
    select(DataAccessSetupSelectors.getAllDataAccessSetup)
  );
  selectedDataAccessSetup$ = this.store.pipe(
    select(DataAccessSetupSelectors.getSelected)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(DataAccessSetupActions.initDataAccessSetup());
  }
}
