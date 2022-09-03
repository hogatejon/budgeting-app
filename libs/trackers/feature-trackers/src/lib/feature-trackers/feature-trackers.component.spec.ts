import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTrackersComponent } from './feature-trackers.component';

describe('FeatureTrackersComponent', () => {
  let component: FeatureTrackersComponent;
  let fixture: ComponentFixture<FeatureTrackersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureTrackersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureTrackersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
