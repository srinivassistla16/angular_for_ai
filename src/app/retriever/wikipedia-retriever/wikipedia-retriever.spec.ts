import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikipediaRetriever } from './wikipedia-retriever';

describe('WikipediaRetriever', () => {
  let component: WikipediaRetriever;
  let fixture: ComponentFixture<WikipediaRetriever>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WikipediaRetriever]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WikipediaRetriever);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
