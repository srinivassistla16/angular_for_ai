import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomToolsTabs } from './custom-tools-tabs';

describe('CustomToolsTabs', () => {
  let component: CustomToolsTabs;
  let fixture: ComponentFixture<CustomToolsTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomToolsTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomToolsTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
