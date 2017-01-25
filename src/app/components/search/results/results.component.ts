import { Component, OnInit, Input } from '@angular/core';
import { Listing } from '../../../interfaces/listing';

@Component({
  selector: 'app-results',
  templateUrl: 'results.component.html',
  styleUrls: ['results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() listing: Listing;

  constructor() {
    console.log(this.listing);
  }

  ngOnInit() {
  }

}
