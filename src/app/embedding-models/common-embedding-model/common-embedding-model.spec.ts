import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonEmbeddingModel } from './common-embedding-model';

describe('CommonEmbeddingModel', () => {
  let component: CommonEmbeddingModel;
  let fixture: ComponentFixture<CommonEmbeddingModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonEmbeddingModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonEmbeddingModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
