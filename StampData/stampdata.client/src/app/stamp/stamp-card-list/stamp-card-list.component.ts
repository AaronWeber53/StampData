import { Component, OnDestroy, OnInit } from '@angular/core';
import { StampService } from '../service/stamp.service';
import { Stamp } from '../model/stamp';
import { StampCardComponent } from '../stamp-card/stamp-card.component';
import { NavBarService } from '../../shared/nav-bar.service';
import { NavBarData } from '../../shared/nav-bar-data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StampModalComponent } from '../stamp-modal/stamp-modal.component';
import { FilterService } from '../service/filter.service';
import { StampFilterComponent } from '../stamp-filter/stamp-filter.component';

@Component({
  selector: 'app-stamp-card-list',
  templateUrl: './stamp-card-list.component.html',
  styleUrl: './stamp-card-list.component.css'
})
export class StampCardListComponent implements OnInit, OnDestroy {
  constructor(
    private service: StampService,
    private navBarService: NavBarService,
    private modalService: NgbModal
  ) { }

  StampList: Stamp[] = [];
  navBarData: NavBarData = new NavBarData("Add Stamp", ($event: any) => {
    const modalRef = this.modalService.open(StampModalComponent, { centered: true });
    modalRef.componentInstance.stamp = new Stamp();
    modalRef.componentInstance.onCloseEvent.subscribe((added: boolean) => {
      if (added) {
        this.updateStampList();
      }
    });
  }, "bi-file-earmark-plus");
  navBarFilter: NavBarData = new NavBarData("", ($event: any) => {
    const modalRef = this.modalService.open(StampFilterComponent, { centered: true });
    modalRef.componentInstance.onCloseEvent.subscribe((updated: boolean) => {
      if (updated) {
        this.updateStampList();
      }
    });

  }, "bi-filter");


  updateStampList() {
    this.service.getStampList().subscribe((data) => {
      this.StampList = data
    });
  }
  windowScrolled = false;
  ngOnInit(): void {

    this.updateStampList();
    this.navBarService.addNavComponent(this.navBarFilter);
    this.navBarService.addNavComponent(this.navBarData);
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
  ngOnDestroy(): void {
    this.navBarService.removeNavComponent(this.navBarFilter);
    this.navBarService.removeNavComponent(this.navBarData);
  }
}
