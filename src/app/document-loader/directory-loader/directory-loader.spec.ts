import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryLoader } from './directory-loader';

describe('DirectoryLoader', () => {
  let component: DirectoryLoader;
  let fixture: ComponentFixture<DirectoryLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectoryLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectoryLoader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
