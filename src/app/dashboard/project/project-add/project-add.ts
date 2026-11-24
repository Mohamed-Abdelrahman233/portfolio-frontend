import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { ProjectService } from '../../../core/services/projects/project.service';
import { ProjectForm } from '../project-form/project-form';

@Component({
  selector: 'app-project-add',
  imports: [ProjectForm],
  templateUrl: './project-add.html',
  styleUrl: './project-add.css',
})
export class ProjectAdd {
  @Output() added = new EventEmitter<void>();
  @Output() failed = new EventEmitter<string>();
  @Output() cancelled = new EventEmitter<void>();

  isLoading = false;

  constructor(
    private _projectService: ProjectService,
    private _cdr: ChangeDetectorRef,
  ) {}

  onSubmit(formData: FormData) {
    this.isLoading = true;
    this._projectService.addProject(formData).subscribe({
      next: () => {
        this.isLoading = false;
        this.added.emit();
      },
      error: () => {
        this.isLoading = false;
        this.failed.emit('حصل خطأ أثناء الحفظ');
        this._cdr.detectChanges();
      },
    });
  }
}
