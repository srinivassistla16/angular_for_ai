import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCustomTool } from './common-custom-tool';

describe('CommonCustomTool', () => {
  let component: CommonCustomTool;
  let fixture: ComponentFixture<CommonCustomTool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonCustomTool]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonCustomTool);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
