import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaneComponent } from './components/plane/plane.component';
import { HelicopterComponent } from './components/helicopter/helicopter.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaneComponent,
    HelicopterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
