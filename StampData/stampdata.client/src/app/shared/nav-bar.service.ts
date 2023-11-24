import { Component, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NavBarData } from './nav-bar-data';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  constructor() { }

  private subjectAdd = new Subject();
  private subjectRemove = new Subject();

  addNavComponent(component: NavBarData) {
    this.subjectAdd.next({ component });
  }

  removeNavComponent(component: NavBarData) {
    this.subjectRemove.next({ component });
  }

  listen(callback: (event: any) => void) {
    this.subjectAdd.asObservable().subscribe((next: any) => {
      callback(next.component);
    })
  }

  listenRemove(callback: (event: any) => void) {
    this.subjectRemove.asObservable().subscribe((next: any) => {
      callback(next.component);
    })
  }
}
