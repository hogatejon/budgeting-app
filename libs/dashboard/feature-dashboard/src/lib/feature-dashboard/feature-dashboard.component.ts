import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'budget-smudget-feature-dashboard',
  templateUrl: './feature-dashboard.component.html',
  styleUrls: ['./feature-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
