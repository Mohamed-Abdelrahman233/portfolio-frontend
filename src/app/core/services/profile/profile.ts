import { inject, Injectable } from '@angular/core';
import { IProfile } from '../../models/profile. model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Profile {
  private apiURl = 'http://localhost:3000/api/profile';
  private _http = inject(HttpClient);

  getProfile() {
    return this._http.get<IProfile>(this.apiURl);
  }

  addProfile(data: FormData) {
    return this._http.post<IProfile>(`${this.apiURl}/admin`, data);
  }

  updateProfile(id: string, data: FormData) {
    return this._http.put<IProfile>(`${this.apiURl}/admin/${id}`, data);
  }
}
