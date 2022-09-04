import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as DataAccessSetupActions from './data-access-setup.actions';
import { DataAccessSetupEffects } from './data-access-setup.effects';
import { DataAccessSetupFacade } from './data-access-setup.facade';
import { DataAccessSetupEntity } from './data-access-setup.models';
import {
  DATA_ACCESS_SETUP_FEATURE_KEY,
  DataAccessSetupState,
  initialDataAccessSetupState,
  dataAccessSetupReducer,
} from './data-access-setup.reducer';
import * as DataAccessSetupSelectors from './data-access-setup.selectors';

interface TestSchema {
  dataAccessSetup: DataAccessSetupState;
}

describe('DataAccessSetupFacade', () => {
  let facade: DataAccessSetupFacade;
  let store: Store<TestSchema>;
  const createDataAccessSetupEntity = (
    id: string,
    name = ''
  ): DataAccessSetupEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(
            DATA_ACCESS_SETUP_FEATURE_KEY,
            dataAccessSetupReducer
          ),
          EffectsModule.forFeature([DataAccessSetupEffects]),
        ],
        providers: [DataAccessSetupFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(DataAccessSetupFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allDataAccessSetup$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allDataAccessSetup$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadDataAccessSetupSuccess` to manually update list
     */
    it('allDataAccessSetup$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allDataAccessSetup$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        DataAccessSetupActions.loadDataAccessSetupSuccess({
          dataAccessSetup: [
            createDataAccessSetupEntity('AAA'),
            createDataAccessSetupEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allDataAccessSetup$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
