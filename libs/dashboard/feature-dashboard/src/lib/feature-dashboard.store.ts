import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';

export interface FeatureDashboardState {
  loading: boolean;
}

@Injectable()
export class FeatureDashboardStore extends ComponentStore<FeatureDashboardState> {
  private loading$ = this.select((state) => state.loading);

  viewModel$ = this.select(this.loading$, (loading) => ({
    loading,
  }));

  constructor() {
    super({
      loading: false,
    });
  }

  private readonly setLoadingState = (loading: boolean) =>
    this.patchState({ loading });
}
