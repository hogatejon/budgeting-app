import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DashboardFeatureDashboardModule } from '@budget-smudget/dashboard/feature-dashboard';
import { HeaderFeatureHeaderModule } from '@budget-smudget/header';
import { HomeFeatureHomeModule } from '@budget-smudget/home/feature-home';
import { TrackersFeatureTrackersModule } from '@budget-smudget/trackers/feature-trackers';
import { TransactionsFeatureTransactionsModule } from '@budget-smudget/transactions/feature-transactions';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HeaderFeatureHeaderModule,
    HomeFeatureHomeModule,
    TrackersFeatureTrackersModule,
    TransactionsFeatureTransactionsModule,
    DashboardFeatureDashboardModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
