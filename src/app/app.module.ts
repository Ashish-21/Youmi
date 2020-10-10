import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YoumiHeaderComponent } from './youmi-header/youmi-header.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, YoumiHeaderComponent, BannerComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
