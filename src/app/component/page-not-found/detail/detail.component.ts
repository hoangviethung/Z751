import { Component, OnInit } from '@angular/core';
import { routeAnimation } from '../../../shared/animations';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  animations: [routeAnimation]
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
