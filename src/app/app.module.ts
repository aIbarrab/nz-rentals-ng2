import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { AppComponent }     from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent }    from './components/home/home.component';
import { SearchComponent }  from './components/search/search.component';
import { HeaderComponent }  from './shared/header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, HomeComponent, SearchComponent, HeaderComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
