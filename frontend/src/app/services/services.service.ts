import { Injectable } from '@angular/core';
import {environment} from '../environments/environments';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Service} from './entities';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private baseUrl = environment.apiUrl + '/services';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Service[]> {
    return this.http.get<Service[]>(this.baseUrl);
  }

  getService(id: number): Observable<Service> {
    return this.http.get<Service>(`${this.baseUrl}/${id}`);
  }

  createService(serviceData: Service): Observable<Service> {
    return this.http.post<Service>(this.baseUrl, serviceData);
  }

  updateService(id: number, serviceData: Service): Observable<Service> {
    return this.http.put<Service>(`${this.baseUrl}/${id}`, serviceData);
  }

  deleteService(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
