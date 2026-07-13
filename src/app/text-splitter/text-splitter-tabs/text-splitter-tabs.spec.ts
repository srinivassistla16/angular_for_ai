import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSplitterTabs } from './text-splitter-tabs';

describe('TextSplitterTabs', () => {
  let component: TextSplitterTabs;
  let fixture: ComponentFixture<TextSplitterTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextSplitterTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextSplitterTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
