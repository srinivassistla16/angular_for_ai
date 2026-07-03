import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromtsTabs } from './promts-tabs';

describe('PromtsTabs', () => {
  let component: PromtsTabs;
  let fixture: ComponentFixture<PromtsTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromtsTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromtsTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
