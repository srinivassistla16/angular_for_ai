import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieverMain } from './retriever-main';

describe('RetrieverMain', () => {
  let component: RetrieverMain;
  let fixture: ComponentFixture<RetrieverMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetrieverMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrieverMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
