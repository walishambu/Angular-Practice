import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoDirective } from '../directives/demo.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//ngx-modules
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
  ],
  declarations: [AppComponent, HelloComponent, DemoDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
