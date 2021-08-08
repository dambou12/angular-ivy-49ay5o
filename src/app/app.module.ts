import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { ProductAlertsComponent } from './products-alerts/product-alerts.components';

@NgModule({
  imports:      [ BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ]) ],
  declarations: [ AppComponent, ProductListComponent, TopBarComponent ,ProductAlertsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
