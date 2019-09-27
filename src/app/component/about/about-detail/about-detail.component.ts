import { Component, OnInit } from '@angular/core';
import { routeAnimation } from '../../../shared/animations';

@Component({
  selector: 'app-about-detail',
  templateUrl: './about-detail.component.html',
  styleUrls: ['./about-detail.component.css'],
  animations: [routeAnimation]
})
export class AboutDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
