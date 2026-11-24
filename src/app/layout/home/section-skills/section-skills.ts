import { ChangeDetectorRef, Component } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { Skill } from '../../../core/services/skills/skill';
import { ISkill } from '../../../core/models/skills.model';

@Component({
  selector: 'app-section-skills',
  imports: [SlicePipe],
  templateUrl: './section-skills.html',
  styleUrl: './section-skills.css',
})
export class SectionSkills {
  skillsList!: ISkill[];
  imgBaseUrl: string = 'http://localhost:3000/api/imgs/';

  constructor(
    private _SkillData: Skill,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._SkillData.getService().subscribe((data) => {
      this.skillsList = data;
      this._cdr.detectChanges();
    });
  }
}
