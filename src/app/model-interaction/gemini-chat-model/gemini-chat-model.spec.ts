import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeminiChatModel } from './gemini-chat-model';

describe('GeminiChatModel', () => {
  let component: GeminiChatModel;
  let fixture: ComponentFixture<GeminiChatModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeminiChatModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeminiChatModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
