import { Injectable }             from '@angular/core';
import { Http, URLSearchParams }  from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class ListingService {

  params: URLSearchParams;

  constructor( private http: Http ) { }

  getListing(){

    this.setParams();

    return this.http.get( 'https://api.tmsandbox.co.nz/v1/Search/Property/Rental.json', {
      search: this.params
    }).map( res => res.json() );

  }

  private setParams(){
    this.params = new URLSearchParams();
    this.params.set( 'search_string', '' );
    this.params.set( 'region', 'ALL' );
    this.params.set( 'oauth_consumer_key', environment.oauth_consumer_key );
    this.params.set( 'oauth_signature', environment.oauth_signature );
    this.params.set( 'oauth_signature_method', environment.oauth_signature_method );
    this.params.set( 'photo_size', 'large' );
  }

}
