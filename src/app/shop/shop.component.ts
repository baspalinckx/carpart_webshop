import {Component, HostBinding, OnInit} from '@angular/core';
import {routeSlideStateTrigger} from "../shared/route-animations";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],

})
export class ShopComponent implements OnInit {

  // @HostBinding('@routeSlideState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
