import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StampComponent } from './stamp.component';
import { HttpClientModule } from '@angular/common/http';
import { StampService } from './service/stamp.service';
import { StampCardListComponent } from './stamp-card-list/stamp-card-list.component';
import { StampCardComponent } from './stamp-card/stamp-card.component';
import { StampModalComponent } from './stamp-modal/stamp-modal.component';
import { CountryAutoFillService } from './service/country-auto-fill.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StampComponent,
    StampCardListComponent,
    StampCardComponent,
    StampModalComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StampService,
    CountryAutoFillService
  ],

})
export class StampModule { }
