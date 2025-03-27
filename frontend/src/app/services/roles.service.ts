import { Injectable } from '@angular/core';
import {environment} from '../environments/environments';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Role} from './entities';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private baseUrl = environment.apiUrl + '/roles';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Role[]> {
    return this.http.get<Role[]>(this.baseUrl);
  }

  getRole(id: number): Observable<Role> {
    return this.http.get<Role>(`${this.baseUrl}/${id}`);
  }

  createRole(roleData: Role): Observable<Role> {
    return this.http.post<Role>(this.baseUrl, roleData);
  }

  updateRole(id: number, roleData: Role): Observable<Role> {
    return this.http.put<Role>(`${this.baseUrl}/${id}`, roleData);
  }

  deleteRole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
