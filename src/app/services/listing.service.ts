import { Injectable }             from '@angular/core';
import { Http, URLSearchParams }  from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class ListingService {

  params: URLSearchParams;

  constructor( private http: Http ) {
    this.params = new URLSearchParams();
  }

  getListing(){
    this.setParams();

    return this.http.get( 'https://api.tmsandbox.co.nz/v1/Search/Property/Rental.json', {
      search: this.params
    }).map( res => res.json() );
  }

  set( param: string, val: string ){
    this.params.set(param, val);
    console.log(param + ': ' + val);
  }

  private setParams(){
    this.params.set( 'oauth_consumer_key', environment.oauth_consumer_key );
    this.params.set( 'oauth_signature', environment.oauth_signature );
    this.params.set( 'oauth_signature_method', environment.oauth_signature_method );

    if( this.params.has( 'region' ) && this.params.get( 'region' ) == '100' ){
      this.params.set( 'region', '' )
    }
  }

}
