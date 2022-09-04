import { Action } from '@ngrx/store';

import * as DataAccessSetupActions from './data-access-setup.actions';
import { DataAccessSetupEntity } from './data-access-setup.models';
import {
  DataAccessSetupState,
  initialDataAccessSetupState,
  dataAccessSetupReducer,
} from './data-access-setup.reducer';

describe('DataAccessSetup Reducer', () => {
  const createDataAccessSetupEntity = (
    id: string,
    name = ''
  ): DataAccessSetupEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid DataAccessSetup actions', () => {
    it('loadDataAccessSetupSuccess should return the list of known DataAccessSetup', () => {
      const dataAccessSetup = [
        createDataAccessSetupEntity('PRODUCT-AAA'),
        createDataAccessSetupEntity('PRODUCT-zzz'),
      ];
      const action = DataAccessSetupActions.loadDataAccessSetupSuccess({
        dataAccessSetup,
      });

      const result: DataAccessSetupState = dataAccessSetupReducer(
        initialDataAccessSetupState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = dataAccessSetupReducer(
        initialDataAccessSetupState,
        action
      );

      expect(result).toBe(initialDataAccessSetupState);
    });
  });
});
