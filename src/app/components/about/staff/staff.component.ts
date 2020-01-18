import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AboutService } from '../about.service';

@Component({
	selector: 'app-staff',
	templateUrl: './staff.component.html',
	styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
	listStaff = [];

	sliderStaff: SwiperConfigInterface = {
		slidesPerView: 4,
		loop: true,
		speed: 1200,
		spaceBetween: 15,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 2000,
		},
	}

	constructor(
		private _aboutSvc: AboutService,
	) { }

	ngOnInit() {
		this.getListStaff();
	}

	getListStaff() {
		this.listStaff = this._aboutSvc.getListStaff();
	}

}
