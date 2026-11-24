import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { ProjectService } from '../../../core/services/projects/project.service';
import { IProject } from '../../../core/models/project.model';
import { ProjectDelete } from '../project-delete/project-delete';

@Component({
  selector: 'app-project-list',
  imports: [SlicePipe, ProjectDelete],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList implements OnInit {
  @Output() addClicked = new EventEmitter<void>();
  @Output() editClicked = new EventEmitter<IProject>();
  @Output() deleted = new EventEmitter<void>();
  @Output() failed = new EventEmitter<string>();

  projects: IProject[] = [];
  imgBaseUrl = 'http://localhost:3000/api/imgs/';

  constructor(
    private _projectService: ProjectService,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this._projectService.getProject().subscribe((data) => {
      this.projects = data || [];
      this._cdr.detectChanges();
    });
  }

  refresh() {
    this.loadProjects();
  }
}
