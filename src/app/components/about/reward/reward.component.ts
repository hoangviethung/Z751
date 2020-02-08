import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
	selector: 'app-reward',
	templateUrl: './reward.component.html',
	styleUrls: ['./reward.component.scss']
})
export class RewardComponent implements OnInit {
	listReward = [];

	sliderReward: SwiperConfigInterface = {
		slidesPerView: 3,
		loop: true,
		speed: 1200,
		spaceBetween: 55,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 2000,
		},
		navigation: {
			nextEl: '.slider-reward .swiper-button-next',
			prevEl: '.slider-reward .swiper-button-prev',
		},
	}

	constructor(
		private _abouSvc: AboutService,
	) { }

	ngOnInit() {
		this.getListReward();
	}
	getListReward() {
		this.listReward = this._abouSvc.getListReward();
	}
}
