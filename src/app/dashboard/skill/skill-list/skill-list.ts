import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SkillService } from '../../../core/services/skills/skill.service';
import { ISkill } from '../../../core/models/skills.model';
import { SkillDelete } from '../skill-delete/skill-delete';

@Component({
  selector: 'app-skill-list',
  imports: [SkillDelete],
  templateUrl: './skill-list.html',
  styleUrl: './skill-list.css',
})
export class SkillList implements OnInit {
  @Output() addClicked = new EventEmitter<void>();
  @Output() editClicked = new EventEmitter<ISkill>();
  @Output() deleted = new EventEmitter<void>();
  @Output() failed = new EventEmitter<string>();

  skills: ISkill[] = [];
  imgBaseUrl = 'http://localhost:3000/api/imgs/';

  constructor(
    private _skillService: SkillService,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadSkills();
  }

  loadSkills() {
    this._skillService.getSkills().subscribe((data) => {
      this.skills = data || [];
      this._cdr.detectChanges();
    });
  }

  refresh() {
    this.loadSkills();
  }
}
