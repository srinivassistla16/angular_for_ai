import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolCallingMultiplier } from './tool-calling-multiplier';

describe('ToolCallingMultiplier', () => {
  let component: ToolCallingMultiplier;
  let fixture: ComponentFixture<ToolCallingMultiplier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolCallingMultiplier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolCallingMultiplier);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
