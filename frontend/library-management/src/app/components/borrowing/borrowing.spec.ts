import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Borrowing } from './borrowing';

describe('Borrowing', () => {
  let component: Borrowing;
  let fixture: ComponentFixture<Borrowing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Borrowing],
    }).compileComponents();

    fixture = TestBed.createComponent(Borrowing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
