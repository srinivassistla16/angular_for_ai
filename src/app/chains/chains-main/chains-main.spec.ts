import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainsMain } from './chains-main';

describe('ChainsMain', () => {
  let component: ChainsMain;
  let fixture: ComponentFixture<ChainsMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChainsMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChainsMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
