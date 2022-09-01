import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSetupComponent } from './feature-setup.component';

describe('FeatureSetupComponent', () => {
  let component: FeatureSetupComponent;
  let fixture: ComponentFixture<FeatureSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureSetupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
