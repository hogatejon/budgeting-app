import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSetupFormComponent } from './ui-setup-form.component';

describe('UiSetupFormComponent', () => {
  let component: UiSetupFormComponent;
  let fixture: ComponentFixture<UiSetupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSetupFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiSetupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
