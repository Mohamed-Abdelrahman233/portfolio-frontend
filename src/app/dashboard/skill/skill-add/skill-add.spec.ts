import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SkillAdd } from './skill-add';

describe('SkillAdd', () => {
  let component: SkillAdd;
  let fixture: ComponentFixture<SkillAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillAdd],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
