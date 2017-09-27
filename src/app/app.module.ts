import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { childComponent } from "./Child/child.component";
import { parentComponent } from "./ViewChild/Parent/parent.component";
import { ViewChildComponent } from "./ViewChild/child/child.component";

@NgModule({
  declarations: [
    AppComponent,childComponent,ViewChildComponent,parentComponent
  ],
  imports: [
    BrowserModule
  ],  
  providers: [],
  bootstrap: [parentComponent]
})
export class AppModule { }
