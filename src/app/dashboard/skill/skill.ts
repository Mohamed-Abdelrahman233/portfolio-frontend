import { Component, ViewChild } from '@angular/core';
import { ISkill } from '../../core/models/skills.model';
import { SkillList } from './skill-list/skill-list';
import { SkillAdd } from './skill-add/skill-add';
import { SkillUpdate } from './skill-update/skill-update';

@Component({
  selector: 'app-skill',
  imports: [SkillList, SkillAdd, SkillUpdate],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill {
  @ViewChild(SkillList) private skillList?: SkillList;

  showForm = false;
  editingId: string | null = null;
  selectedSkill: ISkill | null = null;
  message = '';

  openAddForm() {
    this.editingId = null;
    this.selectedSkill = null;
    this.showForm = true;
  }

  openEditForm(skill: ISkill) {
    this.editingId = skill._id || null;
    this.selectedSkill = skill;
    this.showForm = true;
  }

  cancelForm() {
    this.showForm = false;
    this.editingId = null;
    this.selectedSkill = null;
  }

  onSaved() {
    this.message = 'تم الحفظ بنجاح!';
    this.cancelForm();
    this.skillList?.refresh();
  }

  onDeleted() {
    this.message = 'Skill deleted!';
    this.skillList?.refresh();
  }

  onFailed(message: string) {
    this.message = message;
  }
}
