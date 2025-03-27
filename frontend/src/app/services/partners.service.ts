import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environments';
import {Partner} from './entities';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {


  private baseUrl = environment.apiUrl + '/partners';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Partner[]> {
    return this.http.get<Partner[]>(this.baseUrl);
  }

  getPartner(id: number): Observable<Partner> {
    return this.http.get<Partner>(`${this.baseUrl}/${id}`);
  }

  createPartner(partnerData: Partner): Observable<Partner> {
    return this.http.post<Partner>(this.baseUrl, partnerData);
  }

  updatePartner(id: number, partnerData: Partner): Observable<Partner> {
    return this.http.put<Partner>(`${this.baseUrl}/${id}`, partnerData);
  }

  deletePartner(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
