import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SectionServices } from './section-services';

describe('SectionServices', () => {
  let component: SectionServices;
  let fixture: ComponentFixture<SectionServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionServices],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
