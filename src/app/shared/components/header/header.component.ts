import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() modifierContainer: any;

  constructor() { }

  showMenu: boolean = false;

  ngOnInit(): void {
  }

  toggleDisplay() {
    this.showMenu = !this.showMenu;
  }
}
