import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: String = "NzRentals ng2";
  @Input() showHeader: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
