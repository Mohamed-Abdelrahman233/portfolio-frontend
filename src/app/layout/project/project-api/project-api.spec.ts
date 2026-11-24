import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ProjectApi } from './project-api';

describe('ProjectApi', () => {
  let component: ProjectApi;
  let fixture: ComponentFixture<ProjectApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectApi],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
