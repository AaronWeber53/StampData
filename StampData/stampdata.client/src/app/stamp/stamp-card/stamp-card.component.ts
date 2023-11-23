import { Component, Input, OnInit } from '@angular/core';
import { Stamp } from '../model/stamp';

@Component({
  selector: 'app-stamp-card',
  templateUrl: './stamp-card.component.html',
  styleUrl: './stamp-card.component.css'
})
export class StampCardComponent implements OnInit  {
  ngOnInit(): void {
    console.log(this.stamp);
  }
  @Input({ required: true }) stamp: Stamp = new Stamp();


}
