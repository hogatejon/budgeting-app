import { DataAccessSetupEntity } from './data-access-setup.models';
import {
  dataAccessSetupAdapter,
  DataAccessSetupPartialState,
  initialDataAccessSetupState,
} from './data-access-setup.reducer';
import * as DataAccessSetupSelectors from './data-access-setup.selectors';

describe('DataAccessSetup Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getDataAccessSetupId = (it: DataAccessSetupEntity) => it.id;
  const createDataAccessSetupEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as DataAccessSetupEntity);

  let state: DataAccessSetupPartialState;

  beforeEach(() => {
    state = {
      dataAccessSetup: dataAccessSetupAdapter.setAll(
        [
          createDataAccessSetupEntity('PRODUCT-AAA'),
          createDataAccessSetupEntity('PRODUCT-BBB'),
          createDataAccessSetupEntity('PRODUCT-CCC'),
        ],
        {
          ...initialDataAccessSetupState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('DataAccessSetup Selectors', () => {
    it('getAllDataAccessSetup() should return the list of DataAccessSetup', () => {
      const results = DataAccessSetupSelectors.getAllDataAccessSetup(state);
      const selId = getDataAccessSetupId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = DataAccessSetupSelectors.getSelected(
        state
      ) as DataAccessSetupEntity;
      const selId = getDataAccessSetupId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getDataAccessSetupLoaded() should return the current "loaded" status', () => {
      const result = DataAccessSetupSelectors.getDataAccessSetupLoaded(state);

      expect(result).toBe(true);
    });

    it('getDataAccessSetupError() should return the current "error" state', () => {
      const result = DataAccessSetupSelectors.getDataAccessSetupError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
