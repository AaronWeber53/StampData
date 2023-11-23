import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stamp } from '../model/stamp';

@Injectable({
  providedIn: 'root'
})
export class StampService {

  constructor(private http: HttpClient) { }

  getStampList() {
    return this.http.get<Stamp[]>('api/stamp');
  }
}
