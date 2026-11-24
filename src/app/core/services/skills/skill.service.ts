import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ISkill } from '../../models/skills.model';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  private apiURl = 'http://localhost:3000/api/skill';
  private _http = inject(HttpClient);

  getSkills() {
    return this._http.get<ISkill[]>(this.apiURl);
  }

  addSkill(data: FormData) {
    return this._http.post<ISkill>(`${this.apiURl}/admin`, data);
  }

  updateSkill(id: string, data: FormData) {
    return this._http.put<ISkill>(`${this.apiURl}/admin/${id}`, data);
  }

  deleteSkill(id: string) {
    return this._http.delete(`${this.apiURl}/admin/${id}`);
  }
}
