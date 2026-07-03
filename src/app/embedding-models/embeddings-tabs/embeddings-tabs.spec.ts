import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddingsTabs } from './embeddings-tabs';

describe('EmbeddingsTabs', () => {
  let component: EmbeddingsTabs;
  let fixture: ComponentFixture<EmbeddingsTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmbeddingsTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbeddingsTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
