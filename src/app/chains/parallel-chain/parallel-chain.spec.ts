import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelChain } from './parallel-chain';

describe('ParallelChain', () => {
  let component: ParallelChain;
  let fixture: ComponentFixture<ParallelChain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParallelChain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallelChain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
