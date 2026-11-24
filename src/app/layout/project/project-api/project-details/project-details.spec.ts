import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetials } from './project-details';

describe('ProjectDetials', () => {
  let component: ProjectDetials;
  let fixture: ComponentFixture<ProjectDetials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetials],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDetials);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
