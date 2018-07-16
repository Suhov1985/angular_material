import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {TableBasicExample} from './table-basic-example';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/';
import {DatepickerOverviewExample} from './datepicker-overview-example';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TableBasicExample,
    DatepickerOverviewExample
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent,DatepickerOverviewExample]
})
export class AppModule { }
