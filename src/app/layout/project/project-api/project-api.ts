import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../../core/services/projects/project.service';
import { IProject } from '../../../core/models/project.model';
import { ProjectDetials } from './project-details/project-details';

@Component({
  selector: 'app-project-api',
  imports: [ProjectDetials, RouterLink],
  templateUrl: './project-api.html',
  styleUrl: './project-api.css',
})
export class ProjectApi {
  projectList!: IProject[];
  constructor(
    private _projectData: ProjectService,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._projectData.getProject().subscribe((data) => {
      this.projectList = data;
      this._cdr.detectChanges();
    });
  }
}
