import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSplitterMain } from './text-splitter-main';

describe('TextSplitterMain', () => {
  let component: TextSplitterMain;
  let fixture: ComponentFixture<TextSplitterMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextSplitterMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextSplitterMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
