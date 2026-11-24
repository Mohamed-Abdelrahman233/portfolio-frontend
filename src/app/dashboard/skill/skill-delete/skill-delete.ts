import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { SkillService } from '../../../core/services/skills/skill.service';

@Component({
  selector: 'app-skill-delete',
  imports: [],
  templateUrl: './skill-delete.html',
  styleUrl: './skill-delete.css',
})
export class SkillDelete {
  @Input() id: string | undefined;
  @Output() deleted = new EventEmitter<void>();
  @Output() failed = new EventEmitter<string>();

  constructor(
    private _skillService: SkillService,
    private _cdr: ChangeDetectorRef,
  ) {}

  deleteSkill() {
    if (!this.id || !confirm('متأكد إنك عايز تمسح المهارة دي؟')) return;
    this._skillService.deleteSkill(this.id).subscribe({
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
