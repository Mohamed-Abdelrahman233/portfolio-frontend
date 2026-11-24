import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExprienceApi } from './exprience-api';

describe('ExprienceApi', () => {
  let component: ExprienceApi;
  let fixture: ComponentFixture<ExprienceApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExprienceApi],
    }).compileComponents();

    fixture = TestBed.createComponent(ExprienceApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
