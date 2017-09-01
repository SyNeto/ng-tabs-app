import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabComponent } from './core/tab/tab.component';
import { TabsComponent } from './core/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
