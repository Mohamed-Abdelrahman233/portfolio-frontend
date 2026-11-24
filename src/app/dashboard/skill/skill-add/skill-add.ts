import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { SkillService } from '../../../core/services/skills/skill.service';
import { SkillForm } from '../skill-form/skill-form';

@Component({
  selector: 'app-skill-add',
  imports: [SkillForm],
  templateUrl: './skill-add.html',
  styleUrl: './skill-add.css',
})
export class SkillAdd {
  @Output() added = new EventEmitter<void>();
  @Output() failed = new EventEmitter<string>();
  @Output() cancelled = new EventEmitter<void>();

  isLoading = false;

  constructor(
    private _skillService: SkillService,
    private _cdr: ChangeDetectorRef,
  ) {}

  onSubmit(formData: FormData) {
    this.isLoading = true;
    this._skillService.addSkill(formData).subscribe({
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
