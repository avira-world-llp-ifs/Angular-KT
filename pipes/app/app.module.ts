import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppendPipe } from './pipes/append.pipe';
import { Append1Pipe } from './pipes/append1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppendPipe,
    Append1Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
