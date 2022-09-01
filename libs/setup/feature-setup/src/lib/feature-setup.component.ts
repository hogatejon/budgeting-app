import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'feature-setup',
  templateUrl: './feature-setup.component.html',
  styleUrls: ['./feature-setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureSetupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
