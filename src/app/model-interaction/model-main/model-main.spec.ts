import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelMain } from './model-main';

describe('ModelMain', () => {
  let component: ModelMain;
  let fixture: ComponentFixture<ModelMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
