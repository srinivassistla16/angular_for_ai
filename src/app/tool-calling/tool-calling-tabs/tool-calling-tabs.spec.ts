import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolCallingTabs } from './tool-calling-tabs';

describe('ToolCallingTabs', () => {
  let component: ToolCallingTabs;
  let fixture: ComponentFixture<ToolCallingTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolCallingTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolCallingTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
