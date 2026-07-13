import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLoader } from './text-loader';

describe('TextLoader', () => {
  let component: TextLoader;
  let fixture: ComponentFixture<TextLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextLoader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
