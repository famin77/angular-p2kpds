import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '.widget-content'
})
export class WidgetContentDirective {
  @HostBinding('class.overflow') private _addOverflow = false;

  addOverflow() {
    this._addOverflow = true;
  }

}