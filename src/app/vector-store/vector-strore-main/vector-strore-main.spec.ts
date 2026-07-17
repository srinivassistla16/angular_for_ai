import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorStroreMain } from './vector-strore-main';

describe('VectorStroreMain', () => {
  let component: VectorStroreMain;
  let fixture: ComponentFixture<VectorStroreMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VectorStroreMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VectorStroreMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
