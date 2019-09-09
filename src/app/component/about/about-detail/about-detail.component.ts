import { Component, OnInit } from '@angular/core';
import { routeAnimation } from '../../../shared/animations';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-about-detail',
  templateUrl: './about-detail.component.html',
  styleUrls: ['./about-detail.component.css'],
  animations: [routeAnimation]
})
export class AboutDetailComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);
  }

}
