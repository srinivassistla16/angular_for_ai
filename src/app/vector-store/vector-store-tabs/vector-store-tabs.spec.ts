import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorStoreTabs } from './vector-store-tabs';

describe('VectorStoreTabs', () => {
  let component: VectorStoreTabs;
  let fixture: ComponentFixture<VectorStoreTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VectorStoreTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VectorStoreTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
