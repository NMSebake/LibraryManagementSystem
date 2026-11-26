import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Returnscls } from './returnscls';

describe('Returnscls', () => {
  let component: Returnscls;
  let fixture: ComponentFixture<Returnscls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Returnscls],
    }).compileComponents();

    fixture = TestBed.createComponent(Returnscls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
