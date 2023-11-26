import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() onEditEvent = new EventEmitter<boolean>();
  get imageURL() {
    return '/api/stamp/GetImage/' + this.stamp.id;
  }

  OpenDetails($event: any) {
    const modalRef = this.modalService.open(StampModalComponent);
    modalRef.componentInstance.stamp = this.stamp;
    modalRef.componentInstance.onCloseEvent.subscribe((added: boolean) => {
      if (added) {
        this.OnEdit();
      }
    });
    console.log("Clicked");
  }

  OnEdit() {
    this.onEditEvent.emit(true);
  }
}
