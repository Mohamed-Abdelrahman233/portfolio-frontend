import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { Skill } from './skill';

describe('Skill', () => {
  let component: Skill;
  let fixture: ComponentFixture<Skill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skill],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Skill);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
