import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StampModule } from './stamp/stamp.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarService } from './shared/nav-bar.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    StampModule,
    NgbModule
  ],
  providers: [NavBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
