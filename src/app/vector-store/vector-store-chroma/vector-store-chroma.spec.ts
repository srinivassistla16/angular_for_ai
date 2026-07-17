import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorStoreChroma } from './vector-store-chroma';

describe('VectorStoreChroma', () => {
  let component: VectorStoreChroma;
  let fixture: ComponentFixture<VectorStoreChroma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VectorStoreChroma]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VectorStoreChroma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
