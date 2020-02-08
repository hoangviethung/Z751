import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AboutService } from '../about.service';

@Component({
	selector: 'app-history',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
	listTimeLine = [];

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
	}

	constructor(
		private _abouSvc: AboutService,
	) { }

	ngOnInit() {
		this.getListTimeLine();
	}

	getListTimeLine() {
		this.listTimeLine = this._abouSvc.getListTimeLine();
	}

}
