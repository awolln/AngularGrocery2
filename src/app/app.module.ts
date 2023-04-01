import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppGroceryComponent } from './app-grocery/app-grocery.component';

@NgModule({
  declarations: [
    AppComponent,
   AppGroceryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppGroceryComponent]
})
export class AppModule { }
