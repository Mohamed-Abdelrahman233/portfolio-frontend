import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProject } from '../../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiURl = 'http://localhost:3000/api/project';
  private _http = inject(HttpClient);
  getProject() {
    return this._http.get<IProject[]>(this.apiURl);
  }
  addProject(data: FormData) {
    return this._http.post<IProject>(`${this.apiURl}/admin`, data);
  }

  updateProject(id: string, data: FormData) {
    return this._http.put<IProject>(`${this.apiURl}/admin/${id}`, data);
  }

  deleteProject(id: string) {
    return this._http.delete(`${this.apiURl}/admin/${id}`);
  }
}
