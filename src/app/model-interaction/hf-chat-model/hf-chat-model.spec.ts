import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HfChatModel } from './hf-chat-model';

describe('HfChatModel', () => {
  let component: HfChatModel;
  let fixture: ComponentFixture<HfChatModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HfChatModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HfChatModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
