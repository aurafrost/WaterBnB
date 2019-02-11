import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { PoolsComponent } from './pools/pools.component';
import { RestService } from './services/rest.service';
import { ReviewComponent } from './review/review.component';
import { SigninComponent } from './signin/signin.component';
import { HostComponent } from './host/host.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    PoolsComponent,
    ReviewComponent,
    SigninComponent,
    HostComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
