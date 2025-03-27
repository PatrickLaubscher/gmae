import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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

  getFilteredPartners(filter: {
    page?: number;
    name?: string;
    servicesName?: string;
  }): Observable<Partner[]> {
    let params = new HttpParams();

    if (filter.page !== undefined) {
      params = params.set('page', filter.page.toString());
    }

    if (filter.name) {
      params = params.set('name', filter.name);
    }

    if (filter.servicesName) {
      params = params.set('services.name', filter.servicesName);
    }

    return this.http.get<Partner[]>(this.baseUrl, { params });
  }
}
