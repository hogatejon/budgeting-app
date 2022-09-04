import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as DataAccessSetupActions from './data-access-setup.actions';
import * as DataAccessSetupFeature from './data-access-setup.reducer';

@Injectable()
export class DataAccessSetupEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataAccessSetupActions.initDataAccessSetup),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return DataAccessSetupActions.loadDataAccessSetupSuccess({
            dataAccessSetup: [],
          });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return DataAccessSetupActions.loadDataAccessSetupFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
