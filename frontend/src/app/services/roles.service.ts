import { Injectable } from '@angular/core';
import {environment} from '../environments/environments';
import {HttpClient} from '@angular/common/http';
import {Observable, map} from 'rxjs';
import {Role} from './entities';
import {HydraCollection, HydraItem} from './hydra';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private baseUrl = environment.apiUrl + '/roles';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Role[]> {
    return this.http.get<HydraCollection<Role>>(this.baseUrl).pipe(
      map(response => response['hydra:member'])
    );
  }

  getRole(id: number): Observable<Role> {
    return this.http.get<HydraItem<Role>>(`${this.baseUrl}/${id}`).pipe(
      map(response => {
        const { '@id': _, '@type': __, ...role } = response;
        return role;
      })
    );
  }

  createRole(roleData: Role): Observable<Role> {
    return this.http.post<HydraItem<Role>>(this.baseUrl, roleData).pipe(
      map(response => {
        const { '@id': _, '@type': __, ...role } = response;
        return role;
      })
    );
  }

  updateRole(id: number, roleData: Role): Observable<Role> {
    return this.http.put<HydraItem<Role>>(`${this.baseUrl}/${id}`, roleData).pipe(
      map(response => {
        const { '@id': _, '@type': __, ...role } = response;
        return role;
      })
    );
  }

  deleteRole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
