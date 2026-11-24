import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectService } from '../../../core/services/projects/project.service';
import { IProject } from '../../../core/models/project.model';
import { ProjectForm } from '../project-form/project-form';

@Component({
  selector: 'app-project-update',
  imports: [ProjectForm],
  templateUrl: './project-update.html',
  styleUrl: './project-update.css',
})
export class ProjectUpdate {
  @Input() project!: IProject;
  @Output() updated = new EventEmitter<void>();
  @Output() failed = new EventEmitter<string>();
  @Output() cancelled = new EventEmitter<void>();

  isLoading = false;

  constructor(
    private _projectService: ProjectService,
    private _cdr: ChangeDetectorRef,
  ) {}

  onSubmit(formData: FormData) {
    this.isLoading = true;
    this._projectService.updateProject(this.project._id!, formData).subscribe({
      next: () => {
        this.isLoading = false;
        this.updated.emit();
      },
      error: () => {
        this.isLoading = false;
        this.failed.emit('حصل خطأ أثناء الحفظ');
        this._cdr.detectChanges();
      },
    });
  }
}
