import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { FeatureSetupStore } from './feature-setup.store';

@Component({
  selector: 'feature-setup',
  templateUrl: './feature-setup.component.html',
  styleUrls: ['./feature-setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureSetupComponent {
  viewModel$ = this.componentStore.viewModel$;
  setupForm = this.fb.group({
    incomeEntries: this.fb.array([
      this.fb.group({
        category: this.fb.control('', Validators.required),
        amount: this.fb.control('', Validators.required)
      })
    ])
  });
  setupSteps: MenuItem[] = [
    { label: 'Sources of Income' },
    { label: 'Saving Goals' },
    { label: 'Investment Goals' },
    { label: 'Bills' },
    { label: 'Debt' },
    { label: 'Living Budget' },
  ];
  stepIndex = 0;

  constructor(private readonly componentStore: FeatureSetupStore,
              private readonly fb: FormBuilder,
              private readonly cd: ChangeDetectorRef) {}

  get totalBudget() {
    let total = 0;

    this.setupForm.value.incomeEntries?.forEach(income => {
      if (!Number.isNaN(parseInt(income.amount as string, 10))) {
        total += parseInt(income.amount as string, 10) as any;
      }
    });

    return total;
  }
}
