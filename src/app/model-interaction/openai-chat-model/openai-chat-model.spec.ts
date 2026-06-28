import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenaiChatModel } from './openai-chat-model';

describe('OpenaiChatModel', () => {
  let component: OpenaiChatModel;
  let fixture: ComponentFixture<OpenaiChatModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenaiChatModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenaiChatModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
