import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ui-expected-income',
  templateUrl: './ui-expected-income.component.html',
  styleUrls: ['./ui-expected-income.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiExpectedIncomeComponent {
  @Input() incomeGroup: any;

  constructor(private readonly fb: FormBuilder,
              private readonly cd: ChangeDetectorRef) {}

  addIncomeSource() {
    this.incomeGroup.push(this.fb.group({
      category: this.fb.control(null, Validators.required),
      amount: this.fb.control(null, Validators.required)
    }));
    this.cd.markForCheck();
  }

  removeIncomeSource(event: number) {
    this.incomeGroup.removeAt(event);
    this.cd.markForCheck();
  }
}
