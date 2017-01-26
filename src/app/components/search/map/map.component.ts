import { Component, OnInit, Input } from '@angular/core';
import { Marker } from '../../../interfaces/marker';

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.scss']
})
export class MapComponent implements OnInit {

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  markers: Marker[] = [];

  @Input() list: Array<any>;

  constructor() { }

  updateMarkers(){
    for( let item of this.list ){
      if( item.GeographicLocation ){
        this.markers.push({
          lat: item.GeographicLocation.Latitude,
          lng: item.GeographicLocation.Longitude,
          label: "test",
          draggable: false
        });
      }
    }

    // update map's center position
    this.lat = this.markers[0].lat;
    this.lng = this.markers[0].lng;
  }

  ngOnInit() {
    this.updateMarkers();
  }

}
