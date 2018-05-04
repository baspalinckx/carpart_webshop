import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {ShopComponent} from "./shop/shop.component";
import {HamburgerComponent} from "./hamburger/hamburger.component";


const appRoutes: Routes = [
  {path: '', component: LandingComponent, data: {animation: {page: 'rootPage'}}},
  {path: 'shop', component: ShopComponent, data: {animation: {page: 'shopPage'}}},
  {path: 'menu', component: HamburgerComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
