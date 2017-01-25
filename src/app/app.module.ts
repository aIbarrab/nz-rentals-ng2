import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { AppComponent }     from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent }    from './components/home/home.component';
import { SearchComponent }  from './components/search/search.component';
import { HeaderComponent }  from './shared/header/header.component';
import { ResultsComponent } from './components/search/results/results.component';
import { MapComponent } from './components/search/map/map.component';
import { ListingComponent } from './components/listing/listing.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, HomeComponent, SearchComponent, HeaderComponent, ResultsComponent, MapComponent, ListingComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
