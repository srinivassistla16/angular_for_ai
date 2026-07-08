import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonOutputParser } from './json-output-parser';

describe('JsonOutputParser', () => {
  let component: JsonOutputParser;
  let fixture: ComponentFixture<JsonOutputParser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsonOutputParser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonOutputParser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
