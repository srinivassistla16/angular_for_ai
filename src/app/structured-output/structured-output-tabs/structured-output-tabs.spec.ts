import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredOutputTabs } from './structured-output-tabs';

describe('StructuredOutputTabs', () => {
  let component: StructuredOutputTabs;
  let fixture: ComponentFixture<StructuredOutputTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructuredOutputTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuredOutputTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
