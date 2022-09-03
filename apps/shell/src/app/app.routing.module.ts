import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { FeatureSetupComponent } from "@budget-smudget/setup";

const routes: Routes = [
  {
    path: 'home',
    component: FeatureSetupComponent
  }, {
    path: 'setup',
    component: FeatureSetupComponent
  }, {
    path: 'trackers',
    component: FeatureSetupComponent
  }, {
    path: 'transactions',
    component: FeatureSetupComponent
  }, {
    path: 'dashboards',
    component: FeatureSetupComponent
  }, {
    path: '**',
    component: FeatureSetupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
