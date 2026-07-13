import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentLoaderMain } from './document-loader-main';

describe('DocumentLoaderMain', () => {
  let component: DocumentLoaderMain;
  let fixture: ComponentFixture<DocumentLoaderMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentLoaderMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentLoaderMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
