import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectService } from '../../../core/services/projects/project.service';

@Component({
  selector: 'app-project-delete',
  imports: [],
  templateUrl: './project-delete.html',
  styleUrl: './project-delete.css',
})
export class ProjectDelete {
  @Input() id: string | undefined;
  @Output() deleted = new EventEmitter<void>();
  @Output() failed = new EventEmitter<string>();

  constructor(
    private _projectService: ProjectService,
    private _cdr: ChangeDetectorRef,
  ) {}

  deleteProject() {
    if (!this.id || !confirm('متأكد إنك عايز تمسح المشروع ده؟')) return;
    this._projectService.deleteProject(this.id).subscribe({
      next: () => {
        this.deleted.emit();
      },
      error: () => {
        this.failed.emit('حصل خطأ أثناء المسح');
        this._cdr.detectChanges();
      },
    });
  }
}
