import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { CribsService } from './service/cribs.service';

@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    CribCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [CribsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
