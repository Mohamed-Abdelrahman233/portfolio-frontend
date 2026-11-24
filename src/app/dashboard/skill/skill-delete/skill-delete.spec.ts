import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SkillDelete } from './skill-delete';

describe('SkillDelete', () => {
  let component: SkillDelete;
  let fixture: ComponentFixture<SkillDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillDelete],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillDelete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
