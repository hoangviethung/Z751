import { Component, OnInit } from '@angular/core';
import { routeAnimation } from '../../../shared/animations';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  animations: [routeAnimation]
})
export class HomeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
