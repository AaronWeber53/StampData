import { Component, Input, OnInit } from '@angular/core';
import { Stamp } from '../model/stamp';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StampModalComponent } from '../stamp-modal/stamp-modal.component';

@Component({
  selector: 'app-stamp-card',
  templateUrl: './stamp-card.component.html',
  styleUrl: './stamp-card.component.css'
})
export class StampCardComponent implements OnInit  {
  constructor(private modalService: NgbModal) { }
  ngOnInit(): void {
    console.log(this.stamp);
  }
  @Input({ required: true }) stamp: Stamp = new Stamp();

  get imageURL() {
    return '/api/stamp/GetImage/' + this.stamp.id;
  }

  OpenDetails($event: any) {
    const modalRef = this.modalService.open(StampModalComponent);
    modalRef.componentInstance.stamp = this.stamp;
    console.log("Clicked");
  }
}
