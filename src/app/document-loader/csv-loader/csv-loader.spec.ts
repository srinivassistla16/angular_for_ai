import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvLoader } from './csv-loader';

describe('CsvLoader', () => {
  let component: CsvLoader;
  let fixture: ComponentFixture<CsvLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CsvLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvLoader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
