import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './customers/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComposemessageComponent } from './extras/composemessage/composemessage.component';
import { PagenotfoundComponent } from './extras/pagenotfound/pagenotfound.component';
import { AppRoutingModule } from './app-routing.module';
import {LandingComponent }    from './../app/customers/landing/landing.component';
import { TheatreComponent }    from './../app/customers/theatre/theatre.component';
import { MovieService}    from './../app/services/movie.service';
import {DialogModule} from 'primeng/dialog';
import { SeatComponent } from './customers/seat/seat.component';
import {MaterialModule} from './material/material.module';
import {SharedModule} from './shared/shared.module';

import { DataTableComponent } from './customers/landing/data-table/data-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { Test2Component } from './customers/test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ComposemessageComponent,
    PagenotfoundComponent,
    LandingComponent,
    TheatreComponent,
    SeatComponent,
    DataTableComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule

  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
