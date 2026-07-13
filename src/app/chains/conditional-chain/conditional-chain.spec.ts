import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalChain } from './conditional-chain';

describe('ConditionalChain', () => {
  let component: ConditionalChain;
  let fixture: ComponentFixture<ConditionalChain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConditionalChain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalChain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
