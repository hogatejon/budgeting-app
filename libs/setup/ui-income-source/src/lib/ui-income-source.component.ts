import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ui-income-source',
  templateUrl: './ui-income-source.component.html',
  styleUrls: ['./ui-income-source.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiIncomeSourceComponent {
  @Input() index!: number;
  @Input() incomeGroup!: FormGroup;
  @Input() showDelete = false;
  @Output() remove = new EventEmitter<number>();

  removeSource() {
    this.remove.emit(this.index);
  }
}
