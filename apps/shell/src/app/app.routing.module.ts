import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { FeatureDashboardComponent } from "@budget-smudget/dashboard/feature-dashboard";
import { FeatureHomeComponent } from "@budget-smudget/home/feature-home";
import { FeatureSetupComponent } from "@budget-smudget/setup";
import { FeatureTrackersComponent } from "@budget-smudget/trackers/feature-trackers";
import { FeatureTransactionsComponent } from "@budget-smudget/transactions/feature-transactions";

const routes: Routes = [
  {
    path: 'home',
    component: FeatureHomeComponent
  }, {
    path: 'setup',
    component: FeatureSetupComponent
  }, {
    path: 'trackers',
    component: FeatureTrackersComponent
  }, {
    path: 'transactions',
    component: FeatureTransactionsComponent
  }, {
    path: 'dashboard',
    component: FeatureDashboardComponent
  }, {
    path: '**',
    component: FeatureHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
