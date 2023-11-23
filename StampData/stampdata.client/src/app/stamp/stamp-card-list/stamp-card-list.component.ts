import { Component, OnInit } from '@angular/core';
import { StampService } from '../service/stamp.service';
import { Stamp } from '../model/stamp';
import { StampCardComponent } from '../stamp-card/stamp-card.component';

@Component({
  selector: 'app-stamp-card-list',
  templateUrl: './stamp-card-list.component.html',
  styleUrl: './stamp-card-list.component.css'
})
export class StampCardListComponent implements OnInit {
  constructor(private service: StampService) { }
  StampList: Stamp[] = [];

  ngOnInit(): void {

    this.service.getStampList().subscribe((data) => {
      this.StampList = data
      //debugger;
    }
      );
  }

}
