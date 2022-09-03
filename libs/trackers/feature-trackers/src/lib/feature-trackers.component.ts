import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'budget-smudget-feature-trackers',
  templateUrl: './feature-trackers.component.html',
  styleUrls: ['./feature-trackers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureTrackersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
