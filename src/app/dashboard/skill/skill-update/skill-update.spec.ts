import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SkillUpdate } from './skill-update';

describe('SkillUpdate', () => {
  let component: SkillUpdate;
  let fixture: ComponentFixture<SkillUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillUpdate],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillUpdate);
    fixture.componentRef.setInput('skill', {
      name: 'Test Skill',
      category: 'Frontend',
      iconImg: 'icon.png',
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
