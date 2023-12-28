import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stamp } from '../model/stamp';
import { FilterService } from './filter.service';

@Injectable({
  providedIn: 'root'
})
export class StampService {

  constructor(private http: HttpClient, private filter: FilterService) { }
  getHeaders() {
    const headers = new HttpHeaders()
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', '*')
      .append('Access-Control-Allow-Origin', '*');
    return headers;
  }
  getStampList() {
    let headers = this.getHeaders();
    return this.http.get<Stamp[]>('api/stamp' + this.filter.QueryString, { headers });
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
    let headers = this.getHeaders();

    var formData = new FormData();
    if (stamp.image) {
      let type = stamp.image?.name?.substr(stamp.image.name.lastIndexOf('.') + 1)?.toLowerCase();
      if (type == 'jpg' || type == 'png' || type == 'jpeg') {
        formData.append('image', stamp.image);
      }
    }
    formData.append('scottNumber', stamp.scottNumber);
    formData.append('country', stamp.country);
    formData.append('year', stamp.year.toString());
    formData.append('description', stamp.description);
    formData.append('imageUrl', stamp.imageUrl);
    return this.http.post('api/stamp', formData, {headers});
  }

  updateStamp(stamp: Stamp) {
    let headers = this.getHeaders();
    var formData = new FormData();
    if (stamp.image) {
      let type = stamp.image?.name?.substr(stamp.image.name.lastIndexOf('.') + 1)?.toLowerCase();
      if (type == 'jpg' || type == 'png' || type == 'jpeg') {
        formData.append('image', stamp.image);
      }
    }
    formData.append('scottNumber', stamp.scottNumber);
    formData.append('country', stamp.country);
    formData.append('year', stamp.year.toString());
    formData.append('description', stamp.description);
    formData.append('imageUrl', stamp.imageUrl);

    return this.http.put<Stamp>('api/stamp/' + stamp.id, formData, { headers });
  }

  deleteStamp(stamp: Stamp) {
    let headers = this.getHeaders();
    if (stamp.id) {
      return this.http.delete<number>('api/stamp/' + String(stamp.id));
    }
    return null;
  }
}
