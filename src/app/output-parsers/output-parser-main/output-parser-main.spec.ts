import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputParserMain } from './output-parser-main';

describe('OutputParserMain', () => {
  let component: OutputParserMain;
  let fixture: ComponentFixture<OutputParserMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutputParserMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputParserMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
