import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'budget-smudget-feature-header',
  templateUrl: './feature-header.component.html',
  styleUrls: ['./feature-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClick(event: MouseEvent) {
    console.log(event);
  }
}
