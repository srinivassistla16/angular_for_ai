import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieverTabs } from './retriever-tabs';

describe('RetrieverTabs', () => {
  let component: RetrieverTabs;
  let fixture: ComponentFixture<RetrieverTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetrieverTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrieverTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
