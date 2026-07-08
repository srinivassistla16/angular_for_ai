import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredOutputParser } from './structured-output-parser';

describe('StructuredOutputParser', () => {
  let component: StructuredOutputParser;
  let fixture: ComponentFixture<StructuredOutputParser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructuredOutputParser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuredOutputParser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
