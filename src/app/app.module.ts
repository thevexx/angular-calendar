import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CalendarModule } from 'angular-calendar';
import {NgbModule, NgbTabsetModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    NgbTabsetModule.forRoot(),
    NgbCollapseModule.forRoot(),
    NgbModule.forRoot(),
    CalendarModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
