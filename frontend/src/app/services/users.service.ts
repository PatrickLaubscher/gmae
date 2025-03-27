import { Injectable } from '@angular/core';
import {environment} from '../environments/environments';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './entities';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = environment.apiUrl + '/users';

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  createUser(userData: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, userData);
  }

  updateUser(id: number, userData: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, userData);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
