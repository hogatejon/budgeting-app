import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiIncomeSourceComponent } from './ui-income-source.component';

describe('UiIncomeSourcesComponent', () => {
  let component: UiIncomeSourceComponent;
  let fixture: ComponentFixture<UiIncomeSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiIncomeSourceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiIncomeSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
