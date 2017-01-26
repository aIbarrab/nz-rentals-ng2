import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { AppComponent }     from './app.component';

import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent }    from './components/home/home.component';
import { SearchComponent }  from './components/search/search.component';
import { HeaderComponent }  from './shared/header/header.component';
import { ResultsComponent } from './components/search/results/results.component';
import { MapComponent } from './components/search/map/map.component';
import { ListingComponent } from './components/listing/listing.component';
import { AutoHeightDirective } from './directives/auto-height.directive';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.maps_api_key
    })
  ],
  declarations: [ AppComponent, HomeComponent, SearchComponent, HeaderComponent, ResultsComponent, MapComponent, ListingComponent, AutoHeightDirective ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
