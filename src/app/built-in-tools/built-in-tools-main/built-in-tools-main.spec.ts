import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInToolsMain } from './built-in-tools-main';

describe('BuiltInToolsMain', () => {
  let component: BuiltInToolsMain;
  let fixture: ComponentFixture<BuiltInToolsMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuiltInToolsMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltInToolsMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
