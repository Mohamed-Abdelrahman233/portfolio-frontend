import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ISkill } from '../../models/skills.model';

@Injectable({
  providedIn: 'root',
})
export class Skill {
  private apiURl = 'http://localhost:3000/api/Skill';
  private _http = inject(HttpClient);

  getService() {
    return this._http.get<ISkill[]>(this.apiURl);
  }

  addSkill(data: FormData) {
    return this._http.post<ISkill>(this.apiURl, data);
  }

  updateSkill(id: string, data: FormData) {
    return this._http.put<ISkill>(`${this.apiURl}/${id}`, data);
  }

  deleteSkill(id: string) {
    return this._http.delete(`${this.apiURl}/${id}`);
  }
}
