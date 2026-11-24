import { ChangeDetectorRef, Component } from '@angular/core';
import { ISkill } from '../../../core/models/skills.model';
import { Skill } from '../../../core/services/skills/skill';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
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
