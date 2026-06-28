import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelTabs } from './model-tabs';

describe('ModelTabs', () => {
  let component: ModelTabs;
  let fixture: ComponentFixture<ModelTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
