import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputParserTabs } from './output-parser-tabs';

describe('OutputParserTabs', () => {
  let component: OutputParserTabs;
  let fixture: ComponentFixture<OutputParserTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutputParserTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputParserTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
