import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredOutputMain } from './structured-output-main';

describe('StructuredOutputMain', () => {
  let component: StructuredOutputMain;
  let fixture: ComponentFixture<StructuredOutputMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructuredOutputMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuredOutputMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
