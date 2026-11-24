import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IExperience } from '../../models/experiences.model';

@Injectable({
  providedIn: 'root',
})
export class Experience {
  private apiURl = 'http://localhost:3000/api/experience';
  private _http = inject(HttpClient);

  getExperience() {
    return this._http.get<IExperience[]>(this.apiURl);
  }

  addExperience(data: IExperience) {
    return this._http.post<IExperience>(this.apiURl, data);
  }

  updateExperience(id: string, data: IExperience) {
    return this._http.put<IExperience>(`${this.apiURl}/${id}`, data);
  }

  deleteExperience(id: string) {
    return this._http.delete(`${this.apiURl}/${id}`);
  }
}
