import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SectionProfile } from './section-profile';

describe('SectionProfile', () => {
  let component: SectionProfile;
  let fixture: ComponentFixture<SectionProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionProfile],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
