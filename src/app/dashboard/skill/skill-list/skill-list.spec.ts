import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SkillList } from './skill-list';

describe('SkillList', () => {
  let component: SkillList;
  let fixture: ComponentFixture<SkillList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillList],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
