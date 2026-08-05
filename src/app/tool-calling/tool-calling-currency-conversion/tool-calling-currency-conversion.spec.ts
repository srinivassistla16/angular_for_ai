import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolCallingCurrencyConversion } from './tool-calling-currency-conversion';

describe('ToolCallingCurrencyConversion', () => {
  let component: ToolCallingCurrencyConversion;
  let fixture: ComponentFixture<ToolCallingCurrencyConversion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolCallingCurrencyConversion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolCallingCurrencyConversion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
