import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[nzAutoHeight]'
})
export class AutoHeightDirective {

  constructor() { }

  @HostBinding('style.height.px') height: number;

  @HostListener( 'window:resize', ['$event'] ) onResize( event ){
    this.height = ( event.target.innerHeight - 47 );
  }

  ngOnInit(){
    this.height = window.innerHeight - 47;
  }

}
