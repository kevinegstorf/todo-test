import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule({
  imports: [
    BrowserModule,
    NavigationComponent,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,


  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }