import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUploader } from './document-uploader';

describe('DocumentUploader', () => {
  let component: DocumentUploader;
  let fixture: ComponentFixture<DocumentUploader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentUploader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentUploader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
