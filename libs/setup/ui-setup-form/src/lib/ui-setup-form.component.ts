import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface IncomeForm {
  category: FormControl<string>;
  amount: FormControl<number>;
};

@Component({
  selector: 'ui-setup-form',
  templateUrl: './ui-setup-form.component.html',
  styleUrls: ['./ui-setup-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSetupFormComponent implements OnInit {
  incomeData = [
    { category: 'Paycheck', value: 10000 }
  ];

  constructor() {
  }

  ngOnInit() {

  }
}
