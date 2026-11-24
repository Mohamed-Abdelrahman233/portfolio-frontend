import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutApi } from './about-api';

describe('AboutApi', () => {
  let component: AboutApi;
  let fixture: ComponentFixture<AboutApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutApi],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
