import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, map} from 'rxjs';
import {environment} from '../environments/environments';
import {Partner} from './entities';
import {HydraCollection, HydraItem} from './hydra';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {


  private baseUrl = environment.apiUrl + '/partners';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Partner[]> {
    return this.http.get<HydraCollection<Partner>>(this.baseUrl).pipe(
      map(response => response['hydra:member'])
    );
  }

  getPartner(id: number): Observable<Partner> {
    return this.http.get<HydraItem<Partner>>(`${this.baseUrl}/${id}`).pipe(
      map(response => {
        const { '@id': _, '@type': __, ...partner } = response;
        return partner;
      })
    );
  }

  createPartner(partnerData: Partner): Observable<Partner> {
    return this.http.post<HydraItem<Partner>>(this.baseUrl, partnerData).pipe(
      map(response => {
        const { '@id': _, '@type': __, ...partner } = response;
        return partner;
      })
    );
  }

  updatePartner(id: number, partnerData: Partner): Observable<Partner> {
    return this.http.put<HydraItem<Partner>>(`${this.baseUrl}/${id}`, partnerData).pipe(
      map(response => {
        const { '@id': _, '@type': __, ...partner } = response;
        return partner;
      })
    );
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

    return this.http.get<HydraCollection<Partner>>(this.baseUrl, { params }).pipe(
      map(response => response['hydra:member'])
    );
  }
}
