import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FilterService } from '../service/filter.service';
import { CountryAutoFillService } from '../service/country-auto-fill.service';
import { OperatorFunction } from 'rxjs';

@Component({
  selector: 'app-stamp-filter',
  templateUrl: './stamp-filter.component.html',
  styleUrl: './stamp-filter.component.css'
})
export class StampFilterComponent implements OnDestroy {
  constructor(private filter: FilterService, private countryAutoFill: CountryAutoFillService) { }
    
  search: OperatorFunction<string, readonly string[]> = this.countryAutoFill.search;
  @Output() onCloseEvent = new EventEmitter<boolean>();

  ngOnDestroy(): void {
    this.onCloseEvent?.emit(true);
  }
  get filterAccessor() {
    return this.filter;
  }
}
