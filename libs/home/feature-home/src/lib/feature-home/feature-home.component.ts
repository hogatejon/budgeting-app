import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'budget-smudget-feature-home',
  templateUrl: './feature-home.component.html',
  styleUrls: ['./feature-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
