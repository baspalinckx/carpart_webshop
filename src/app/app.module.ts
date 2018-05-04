import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { LandingComponent } from './landing/landing.component';
import {AppRoutingModule} from "./app.routing.module";
import { ShopComponent } from './shop/shop.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HeaderComponent } from './header/header.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';
import { ShopItemComponent } from './shop/shop-list/shop-item/shop-item.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HamburgerComponent } from './hamburger/hamburger.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ShopComponent,
    HeaderComponent,
    ShopListComponent,
    ShopItemComponent,
    HamburgerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
