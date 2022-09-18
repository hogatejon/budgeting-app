import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FeatureSetupStore } from './feature-setup.store';

@Component({
  selector: 'feature-setup',
  templateUrl: './feature-setup.component.html',
  styleUrls: ['./feature-setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureSetupComponent implements OnInit {
  viewModel$ = this.componentStore.viewModel$;
  setupForm = this.fb.group({
    incomeEntries: this.fb.array([
      this.fb.group({})
    ])
  });

  constructor(private readonly componentStore: FeatureSetupStore,
              private readonly fb: FormBuilder) {}

  ngOnInit(): void {}
}
