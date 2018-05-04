import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
) { }

  ngOnInit() {
  }

  public openMenuDropdown() {
    document.getElementById('menus').style.width = '100%';
  }

  public oloseMenuDropdown() {
    document.getElementById('menus').style.width = '0%';
  }


}
