import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
	selector: 'app-history',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.scss']
})

export class HistoryComponent implements OnInit {

	TimelineUrl = 'assets/db/vi/about-timeline.json'
	years = [];

	sliderHistory: SwiperConfigInterface = {
		slidesPerView: 4,
		loop: true,
		speed: 1200,
		spaceBetween: 80,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.timeline .swiper-button-next',
			prevEl: '.timeline .swiper-button-prev',
		},
		breakpoints: {
			1025: {
				slidesPerView: 3,
				spaceBetween: 60,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			}
		}
	}

	constructor(
		private httpSvc: HttpService,
	) { }

	ngOnInit() {
		this.getListTimeLine();
	}

	getListTimeLine() {
		this.httpSvc.get(this.TimelineUrl).subscribe(result => {
			this.years = result.data;
		})
	}

}
