import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {ShopComponent} from "./shop/shop.component";
import {AboutComponent} from "./about/about.component";


const appRoutes: Routes = [
  {path: '', component: LandingComponent, data: {animation: {page: 'rootPage'}}},
  {path: 'shop', component: ShopComponent, data: {animation: {page: 'shopPage'}}},
  {path: 'about', component: AboutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
