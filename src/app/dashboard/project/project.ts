import { Component, ViewChild } from '@angular/core';
import { IProject } from '../../core/models/project.model';
import { ProjectList } from './project-list/project-list';
import { ProjectAdd } from './project-add/project-add';
import { ProjectUpdate } from './project-update/project-update';

@Component({
  selector: 'app-project',
  imports: [ProjectList, ProjectAdd, ProjectUpdate],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  @ViewChild(ProjectList) private projectList?: ProjectList;

  showForm = false;
  editingId: string | null = null;
  selectedProject: IProject | null = null;
  message = '';

  openAddForm() {
    this.editingId = null;
    this.selectedProject = null;
    this.showForm = true;
  }

  openEditForm(project: IProject) {
    this.editingId = project._id || null;
    this.selectedProject = project;
    this.showForm = true;
  }

  cancelForm() {
    this.showForm = false;
    this.editingId = null;
    this.selectedProject = null;
  }

  onSaved() {
    this.message = 'تم الحفظ بنجاح!';
    this.cancelForm();
    this.projectList?.refresh();
  }

  onDeleted() {
    this.message = 'Project deleted!';
    this.projectList?.refresh();
  }

  onFailed(message: string) {
    this.message = message;
  }
}
