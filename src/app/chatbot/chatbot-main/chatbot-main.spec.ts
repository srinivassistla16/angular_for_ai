import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotMain } from './chatbot-main';

describe('ChatbotMain', () => {
  let component: ChatbotMain;
  let fixture: ComponentFixture<ChatbotMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatbotMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
