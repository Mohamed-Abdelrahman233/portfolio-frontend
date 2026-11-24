import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IServices } from '../../models/service.model';

@Injectable({
  providedIn: 'root',
})
export class Services {
  private apiURl = 'http://localhost:3000/api/service';
  private _http = inject(HttpClient);

  getService() {
    return this._http.get<IServices[]>(this.apiURl);
  }

  addService(data: FormData) {
    return this._http.post<IServices>(`${this.apiURl}/admin`, data);
  }

  updateService(id: string, data: FormData) {
    return this._http.put<IServices>(`${this.apiURl}/admin/${id}`, data);
  }

  deleteService(id: string) {
    return this._http.delete(`${this.apiURl}/admin/${id}`);
  }
}
