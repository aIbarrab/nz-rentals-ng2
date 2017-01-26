import { Component, OnInit, OnDestroy }  from '@angular/core';
import { ActivatedRoute }      from '@angular/router';
import { ListingService }     from '../../services/listing.service';
import { Listing }            from '../../interfaces/listing';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ ListingService ]
})
export class SearchComponent implements OnInit {

  listing: Listing;
  regionId: string;
  regionName: string;

  constructor( private listingService: ListingService, private route: ActivatedRoute) {
    this.regionId = this.route.snapshot.params[ 'regionId' ];
    this.regionName = this.route.snapshot.params[ 'regionName' ];
  }

  ngOnInit() {
    this.listingService.set( 'region', this.regionId );
    this.listingService.set( 'photo_size', 'large' );
    this.listingService.getListing().subscribe(listing => {
      this.listing = listing;
    });
  }

}
