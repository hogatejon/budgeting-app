import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTransactionsComponent } from './feature-transactions.component';

describe('FeatureTransactionsComponent', () => {
  let component: FeatureTransactionsComponent;
  let fixture: ComponentFixture<FeatureTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureTransactionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
