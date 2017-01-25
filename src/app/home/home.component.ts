import { Component, OnInit }  from '@angular/core';
import { LocationsService }   from '../services/locations.service';
import { Locations }          from '../interfaces/locations';

@Component({
  selector: 'app-home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  providers: [ LocationsService ]
})
export class HomeComponent implements OnInit {

  locations: Locations[];

  constructor( private locationsService: LocationsService ) {
    this.locationsService.getLocations().subscribe(locations => {
      this.locations = locations;
    });
  }

  ngOnInit() {
  }

}
