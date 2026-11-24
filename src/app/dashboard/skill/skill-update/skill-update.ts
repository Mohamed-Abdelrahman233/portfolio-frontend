import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { SkillService } from '../../../core/services/skills/skill.service';
import { ISkill } from '../../../core/models/skills.model';
import { SkillForm } from '../skill-form/skill-form';

@Component({
  selector: 'app-skill-update',
  imports: [SkillForm],
  templateUrl: './skill-update.html',
  styleUrl: './skill-update.css',
})
export class SkillUpdate {
  @Input() skill!: ISkill;
  @Output() updated = new EventEmitter<void>();
  @Output() failed = new EventEmitter<string>();
  @Output() cancelled = new EventEmitter<void>();

  isLoading = false;

  constructor(
    private _skillService: SkillService,
    private _cdr: ChangeDetectorRef,
  ) {}

  onSubmit(formData: FormData) {
    this.isLoading = true;
    this._skillService.updateSkill(this.skill._id!, formData).subscribe({
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
