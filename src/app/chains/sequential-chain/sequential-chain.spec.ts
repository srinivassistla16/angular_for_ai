import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequentialChain } from './sequential-chain';

describe('SequentialChain', () => {
  let component: SequentialChain;
  let fixture: ComponentFixture<SequentialChain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SequentialChain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SequentialChain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
