import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromtsMain } from './promts-main';

describe('PromtsMain', () => {
  let component: PromtsMain;
  let fixture: ComponentFixture<PromtsMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromtsMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromtsMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
