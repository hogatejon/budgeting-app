import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DashboardFeatureDashboardModule } from '@budget-smudget/dashboard/feature-dashboard';
import { HeaderFeatureHeaderModule } from '@budget-smudget/header';
import { HomeFeatureHomeModule } from '@budget-smudget/home/feature-home';
import { TrackersFeatureTrackersModule } from '@budget-smudget/trackers/feature-trackers';
import { TransactionsFeatureTransactionsModule } from '@budget-smudget/transactions/feature-transactions';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HeaderFeatureHeaderModule,
    HomeFeatureHomeModule,
    TrackersFeatureTrackersModule,
    TransactionsFeatureTransactionsModule,
    DashboardFeatureDashboardModule,
    RouterModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
