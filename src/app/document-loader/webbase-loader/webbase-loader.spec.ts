import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebbaseLoader } from './webbase-loader';

describe('WebbaseLoader', () => {
  let component: WebbaseLoader;
  let fixture: ComponentFixture<WebbaseLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebbaseLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebbaseLoader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
