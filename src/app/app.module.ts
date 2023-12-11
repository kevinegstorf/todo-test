import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    NavigationComponent,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ],
  providers: [TodoService], 
})
export class AppModule { }