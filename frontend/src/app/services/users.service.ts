import { Injectable } from '@angular/core';
import {environment} from '../environments/environments';
import {HttpClient} from '@angular/common/http';
import {Observable, map} from 'rxjs';
import {User} from './entities';
import {HydraCollection, HydraItem} from './hydra';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = environment.apiUrl + '/users';

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<HydraCollection<User>>(this.baseUrl).pipe(
      map(response => response['hydra:member'])
    );
  }

  getUser(id: number): Observable<User> {
    return this.http.get<HydraItem<User>>(`${this.baseUrl}/${id}`).pipe(
      map(response => {
        const { '@id': _, '@type': __, ...user } = response;
        return user;
      })
    );
  }

  createUser(userData: User): Observable<User> {
    return this.http.post<HydraItem<User>>(this.baseUrl, userData).pipe(
      map(response => {
        const { '@id': _, '@type': __, ...user } = response;
        return user;
      })
    );
  }

  updateUser(id: number, userData: User): Observable<User> {
    return this.http.put<HydraItem<User>>(`${this.baseUrl}/${id}`, userData).pipe(
      map(response => {
        const { '@id': _, '@type': __, ...user } = response;
        return user;
      })
    );
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
