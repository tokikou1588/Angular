import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyC01Component } from './myc01';
import { MyC02Component } from './myc02.component';
import { MyC03Component } from './myc03/myc03.component';
import { Myc04Component } from './myc04/myc04.component';
import { Myc05Component } from './myc05/myc05.component';
import { Myc06Component } from './myc06/myc06.component';
import { Myc07NgforComponent } from './myc07-ngfor/myc07-ngfor.component';
import { Myc08NgifComponent } from './myc08-ngif/myc08-ngif.component';

@NgModule({
  declarations: [   // declarations:宣言/声明/宣称
    AppComponent,
    MyC01Component,
    MyC02Component,
    MyC03Component,
    Myc04Component,
    Myc05Component,
    Myc06Component,
    Myc07NgforComponent,
    Myc08NgifComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
