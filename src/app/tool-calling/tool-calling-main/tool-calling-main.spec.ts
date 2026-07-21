import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolCallingMain } from './tool-calling-main';

describe('ToolCallingMain', () => {
  let component: ToolCallingMain;
  let fixture: ComponentFixture<ToolCallingMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolCallingMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolCallingMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
