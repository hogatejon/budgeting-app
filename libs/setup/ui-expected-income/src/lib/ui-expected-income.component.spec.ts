import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiExpectedIncomeComponent } from './ui-expected-income.component';

describe('UiExpectedIncomeComponent', () => {
  let component: UiExpectedIncomeComponent;
  let fixture: ComponentFixture<UiExpectedIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiExpectedIncomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiExpectedIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
