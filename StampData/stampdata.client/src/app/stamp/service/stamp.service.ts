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
    let options = new HttpHeaders({ 'Content-Type': 'multipart/form-data' });

    var formData = new FormData();
    if (stamp.image) {
      let type = stamp.image.name.substr(stamp.image.name.lastIndexOf('.') + 1)
      if (type == 'jpg' || type == 'png' || type == 'jpeg') {
        formData.append('image', stamp.image);
      }
    }
    formData.append('scottNumber', stamp.scottNumber);
    formData.append('country', stamp.country);
    formData.append('year', stamp.year.toString());
    formData.append('description', stamp.description);
    formData.append('imageUrl', stamp.imageUrl);
    return this.http.post('/api/stamp', formData);
  }

  updateStamp(stamp: Stamp) {
    return this.http.put<Stamp>('/api/stamp', stamp);
  }
}
