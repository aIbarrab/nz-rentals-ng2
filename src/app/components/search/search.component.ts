import { Component, OnInit }  from '@angular/core';
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

  constructor( private listingService: ListingService) {
    this.listingService.getListing().subscribe(listing => {
      this.listing = listing;
    });
  }

  ngOnInit() {
  }

}
