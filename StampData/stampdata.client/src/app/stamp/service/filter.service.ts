import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }
  public country: string = '';
  public scottNumber: string = '';
  public yearlow: string = '';
  public yearHigh: string = '';
}
