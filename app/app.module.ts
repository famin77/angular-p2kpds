import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetContentDirective } from './widget-content.directive';
import { WidgetItemComponent } from './widget-item/widget-item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, WidgetContentDirective, HelloComponent, WidgetComponent, WidgetItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
