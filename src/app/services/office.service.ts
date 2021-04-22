import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IOffice} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {
URL = 'http://localhost:8000/offices';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IOffice[]> {
    return this.httpClient.get<IOffice[]>(this.URL);
  }

  create(data: IOffice): Observable<void> {
    return this.httpClient.post<void>(this.URL, data);
  }
}
