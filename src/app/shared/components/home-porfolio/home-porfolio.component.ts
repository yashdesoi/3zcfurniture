import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-porfolio',
  templateUrl: './home-porfolio.component.html',
  styleUrls: ['./home-porfolio.component.scss']
})
export class HomePorfolioComponent implements OnInit {

  @Input() src:string = '';
  @Input() title:string = '';
  @Input() subTitle:string = '';
  @Input() detailsLink:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
