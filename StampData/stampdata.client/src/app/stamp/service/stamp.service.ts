import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  updateOrAddStamp(stamp: Stamp) {
    if (stamp.id) {
      return this.updateStamp(stamp);
    }
    else {
      return this.addStamp(stamp);
    }
  }

  addStamp(stamp: Stamp) {
    let options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('/api/stamp', stamp, { headers: options });
  }

  updateStamp(stamp: Stamp) {
    return this.http.put<Stamp>('/api/stamp', stamp);
  }
}
