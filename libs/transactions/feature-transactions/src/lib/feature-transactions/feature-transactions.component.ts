import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'budget-smudget-feature-transactions',
  templateUrl: './feature-transactions.component.html',
  styleUrls: ['./feature-transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureTransactionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
