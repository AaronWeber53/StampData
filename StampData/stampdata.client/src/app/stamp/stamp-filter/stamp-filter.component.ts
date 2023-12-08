import { Component } from '@angular/core';
import { FilterService } from '../service/filter.service';
import { CountryAutoFillService } from '../service/country-auto-fill.service';
import { OperatorFunction } from 'rxjs';

@Component({
  selector: 'app-stamp-filter',
  templateUrl: './stamp-filter.component.html',
  styleUrl: './stamp-filter.component.css'
})
export class StampFilterComponent {
  constructor(private filter: FilterService, private countryAutoFill: CountryAutoFillService) { }
  search: OperatorFunction<string, readonly string[]> = this.countryAutoFill.search;

  get filterAccessor() {
    return this.filter;
  }
}
