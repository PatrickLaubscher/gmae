import { Injectable } from '@angular/core';
import {environment} from '../environments/environments';
import {HttpClient} from '@angular/common/http';
import {Observable, map} from 'rxjs';
import {Service} from './entities';
import {HydraCollection, HydraItem} from './hydra';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private baseUrl = environment.apiUrl + '/services';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Service[]> {
    return this.http.get<HydraCollection<Service>>(this.baseUrl).pipe(
      map(response => response['hydra:member'])
    );
  }

  getService(id: number): Observable<Service> {
    return this.http.get<HydraItem<Service>>(`${this.baseUrl}/${id}`).pipe(
      map(response => {
        const { '@id': _, '@type': __, ...service } = response;
        return service;
      })
    );
  }

  createService(serviceData: Service): Observable<Service> {
    return this.http.post<HydraItem<Service>>(this.baseUrl, serviceData).pipe(
      map(response => {
        const { '@id': _, '@type': __, ...service } = response;
        return service;
      })
    );
  }

  updateService(id: number, serviceData: Service): Observable<Service> {
    return this.http.put<HydraItem<Service>>(`${this.baseUrl}/${id}`, serviceData).pipe(
      map(response => {
        const { '@id': _, '@type': __, ...service } = response;
        return service;
      })
    );
  }

  deleteService(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
