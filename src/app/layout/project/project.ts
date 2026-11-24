import { Component } from '@angular/core';
import { ProjectApi } from './project-api/project-api';
@Component({
  selector: 'app-project',
  imports: [ProjectApi],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {}
