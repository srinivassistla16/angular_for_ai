import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomToolsMain } from './custom-tools-main';

describe('CustomToolsMain', () => {
  let component: CustomToolsMain;
  let fixture: ComponentFixture<CustomToolsMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomToolsMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomToolsMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
