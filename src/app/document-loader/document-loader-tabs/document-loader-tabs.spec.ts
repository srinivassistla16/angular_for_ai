import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentLoaderTabs } from './document-loader-tabs';

describe('DocumentLoaderTabs', () => {
  let component: DocumentLoaderTabs;
  let fixture: ComponentFixture<DocumentLoaderTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentLoaderTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentLoaderTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
