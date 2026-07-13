import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PypdfLoader } from './pypdf-loader';

describe('PypdfLoader', () => {
  let component: PypdfLoader;
  let fixture: ComponentFixture<PypdfLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PypdfLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PypdfLoader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
