import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonChatModel } from './common-chat-model';

describe('CommonChatModel', () => {
  let component: CommonChatModel;
  let fixture: ComponentFixture<CommonChatModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonChatModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonChatModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
