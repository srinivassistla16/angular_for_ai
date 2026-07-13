import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainsTabs } from './chains-tabs';

describe('ChainsTabs', () => {
  let component: ChainsTabs;
  let fixture: ComponentFixture<ChainsTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChainsTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChainsTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
