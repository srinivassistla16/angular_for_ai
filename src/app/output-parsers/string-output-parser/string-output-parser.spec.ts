import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringOutputParser } from './string-output-parser';

describe('StringOutputParser', () => {
  let component: StringOutputParser;
  let fixture: ComponentFixture<StringOutputParser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StringOutputParser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringOutputParser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
