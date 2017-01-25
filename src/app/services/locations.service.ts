import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LocationsService {

  constructor(private http: Http) { }

  getLocations(){
    return this.http.get( 'https://api.trademe.co.nz/v1/Localities.json' )
      .map( res => res.json() );
  }

}
