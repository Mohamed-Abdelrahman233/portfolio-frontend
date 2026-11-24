import { ChangeDetectorRef, Component } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../../core/services/projects/project.service';
import { IProject } from '../../../core/models/project.model';

@Component({
  selector: 'app-section-projects',
  imports: [SlicePipe, RouterLink],
  templateUrl: './section-projects.html',
  styleUrl: './section-projects.css',
})
export class SectionProjects {
  projectList!: IProject[];
  imgBaseUrl: string = 'http://localhost:3000/api/imgs/';

  constructor(
    private _projectData: ProjectService,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._projectData.getProject().subscribe((data) => {
      this.projectList = [...data].sort(
        (a, b) => Number(b.isFeatured) - Number(a.isFeatured),
      );
      this._cdr.detectChanges();
    });
  }
}
