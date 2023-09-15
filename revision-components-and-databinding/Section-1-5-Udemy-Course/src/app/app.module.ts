import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
