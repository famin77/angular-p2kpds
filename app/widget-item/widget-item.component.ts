import { Component, OnInit, Host, Input } from '@angular/core';
import { WidgetContentDirective } from '../widget-content.directive';

@Component({
  selector: 'widget-item',
  templateUrl: './widget-item.component.html',
  styleUrls: ['./widget-item.component.css']
})
export class WidgetItemComponent implements OnInit {
  @Input() condition;

  constructor(@Host() private widgetContentQuery: WidgetContentDirective) { }

  ngOnInit() {
    if(this.condition) {
      this.widgetContentQuery.addOverflow();
    }
  }

}