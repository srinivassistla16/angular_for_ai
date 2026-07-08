import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PydanticOutputParser } from './pydantic-output-parser';

describe('PydanticOutputParser', () => {
  let component: PydanticOutputParser;
  let fixture: ComponentFixture<PydanticOutputParser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PydanticOutputParser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PydanticOutputParser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
