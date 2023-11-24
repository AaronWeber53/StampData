import { Component, OnDestroy, OnInit } from '@angular/core';
import { StampService } from '../service/stamp.service';
import { Stamp } from '../model/stamp';
import { StampCardComponent } from '../stamp-card/stamp-card.component';
import { NavBarService } from '../../shared/nav-bar.service';
import { NavBarData } from '../../shared/nav-bar-data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StampModalComponent } from '../stamp-modal/stamp-modal.component';

@Component({
  selector: 'app-stamp-card-list',
  templateUrl: './stamp-card-list.component.html',
  styleUrl: './stamp-card-list.component.css'
})
export class StampCardListComponent implements OnInit, OnDestroy {
  constructor(private service: StampService, private navBarService: NavBarService, private modalService: NgbModal) { }

  StampList: Stamp[] = [];
  navBarData: NavBarData = new NavBarData("Add Stamp", ($event: any) => {
    const modalRef = this.modalService.open(StampModalComponent, { centered: true });
    modalRef.componentInstance.stamp = new Stamp();
  }, "bi-file-earmark-plus");



  ngOnInit(): void {

    this.service.getStampList().subscribe((data) => {
      this.StampList = data
    });
    this.navBarService.addNavComponent(this.navBarData);
  }

  ngOnDestroy(): void {
    this.navBarService.removeNavComponent(this.navBarData);
  }
}
