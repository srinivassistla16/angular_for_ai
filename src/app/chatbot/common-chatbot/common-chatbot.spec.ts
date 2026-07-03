import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonChatbot } from './common-chatbot';

describe('CommonChatbot', () => {
  let component: CommonChatbot;
  let fixture: ComponentFixture<CommonChatbot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonChatbot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonChatbot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
