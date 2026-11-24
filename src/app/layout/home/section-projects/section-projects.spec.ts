import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SectionProjects } from './section-projects';

describe('SectionProjects', () => {
  let component: SectionProjects;
  let fixture: ComponentFixture<SectionProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionProjects],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionProjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
