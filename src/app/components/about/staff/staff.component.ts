import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { HttpService } from 'src/app/shared/services/http.service';


@Component({
	selector: 'app-staff',
	templateUrl: './staff.component.html',
	styleUrls: ['./staff.component.scss']
})

export class StaffComponent implements OnInit {
	StaffUrl = 'assets/db/vi/about-staffs.json';
	staffs = [];

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
		private httpSvc: HttpService,
	) { }

	ngOnInit() {
		this.getListStaff();
	}

	getListStaff() {
		this.httpSvc.get(this.StaffUrl).subscribe(result => {
			this.staffs = result.data;
		})
	}

}
