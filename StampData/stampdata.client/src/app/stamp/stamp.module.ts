import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StampComponent } from './stamp.component';
import { HttpClientModule } from '@angular/common/http';
import { StampService } from './service/stamp.service';
import { StampCardListComponent } from './stamp-card-list/stamp-card-list.component';
import { StampCardComponent } from './stamp-card/stamp-card.component';



@NgModule({
  declarations: [
    StampComponent,
    StampCardListComponent,
    StampCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    StampService
  ],

})
export class StampModule { }
