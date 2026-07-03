import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotTabs } from './chatbot-tabs';

describe('ChatbotTabs', () => {
  let component: ChatbotTabs;
  let fixture: ComponentFixture<ChatbotTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatbotTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
