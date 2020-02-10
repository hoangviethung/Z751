import { Component, OnInit } from '@angular/core';
import { SwiperConfig, SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
	selector: 'app-product-others',
	templateUrl: './product-others.component.html',
	styleUrls: ['./product-others.component.scss']
})
export class ProductOthersComponent implements OnInit {

	constructor() { }

	sliderProductOthers: SwiperConfigInterface = {
		slidesPerView: 3,
		loop: true,
		speed: 1200,
		spaceBetween: 38,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 2000,
		},
		navigation: {
			nextEl: '.slider-product-othders .swiper-button-next',
			prevEl: '.slider-product-othders .swiper-button-prev',
		},
	}

	ngOnInit() {
	}

}
