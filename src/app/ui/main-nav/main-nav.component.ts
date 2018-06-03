import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  show1 = false;

  constructor() { }

  toggleCollapse() {
    this.show1 = !this.show1;
  }

}
