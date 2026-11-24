import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hame } from './hame';

describe('Hame', () => {
  let component: Hame;
  let fixture: ComponentFixture<Hame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hame],
    }).compileComponents();

    fixture = TestBed.createComponent(Hame);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
