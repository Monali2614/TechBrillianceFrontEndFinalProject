import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
 
 
  ngOnInit() {
    const dropdownElement = document.getElementById('navbarDropdown');
    if (dropdownElement) {
      new bootstrap.Dropdown(dropdownElement);
    }
 
  }
 
  isCollapsed = true;  // initially set navbar to be collapsed
 
  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}