import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonStructuredOutput } from './common-structured-output';

describe('CommonStructuredOutput', () => {
  let component: CommonStructuredOutput;
  let fixture: ComponentFixture<CommonStructuredOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonStructuredOutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonStructuredOutput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
