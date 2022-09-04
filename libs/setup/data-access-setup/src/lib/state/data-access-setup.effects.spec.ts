import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as DataAccessSetupActions from './data-access-setup.actions';
import { DataAccessSetupEffects } from './data-access-setup.effects';

describe('DataAccessSetupEffects', () => {
  let actions: Observable<Action>;
  let effects: DataAccessSetupEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        DataAccessSetupEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(DataAccessSetupEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', {
        a: DataAccessSetupActions.initDataAccessSetup(),
      });

      const expected = hot('-a-|', {
        a: DataAccessSetupActions.loadDataAccessSetupSuccess({
          dataAccessSetup: [],
        }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
