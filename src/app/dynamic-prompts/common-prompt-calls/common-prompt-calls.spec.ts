import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPromptCalls } from './common-prompt-calls';

describe('CommonPromptCalls', () => {
  let component: CommonPromptCalls;
  let fixture: ComponentFixture<CommonPromptCalls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonPromptCalls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonPromptCalls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
