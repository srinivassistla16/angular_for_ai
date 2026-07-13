import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveCharTextSplitter } from './recursive-char-text-splitter';

describe('RecursiveCharTextSplitter', () => {
  let component: RecursiveCharTextSplitter;
  let fixture: ComponentFixture<RecursiveCharTextSplitter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecursiveCharTextSplitter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecursiveCharTextSplitter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
