import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddingsMain } from './embeddings-main';

describe('EmbeddingsMain', () => {
  let component: EmbeddingsMain;
  let fixture: ComponentFixture<EmbeddingsMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmbeddingsMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbeddingsMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
