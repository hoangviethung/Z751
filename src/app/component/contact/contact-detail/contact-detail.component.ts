import { Component, OnInit } from '@angular/core';
import { routeAnimation } from '../../../shared/animations';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
  animations: [routeAnimation]
})
export class ContactDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
