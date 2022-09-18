import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-income-source',
  templateUrl: './ui-income-source.component.html',
  styleUrls: ['./ui-income-source.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiIncomeSourceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
