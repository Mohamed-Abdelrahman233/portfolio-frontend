import { Component, Input } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { IProject } from '../../../../core/models/project.model';

@Component({
  selector: 'app-project-details',
  imports: [SlicePipe],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetials {
  @Input() projectList!: IProject;
  imgBaseUrl: string = 'http://localhost:3000/api/imgs/';
}
