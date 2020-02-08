import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface, SwiperDirective, SwiperComponent } from 'ngx-swiper-wrapper';
@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
	swiperConfig: SwiperConfigInterface = {
		slidesPerView: 1,
		loop: true,
		speed: 1200,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	}
	constructor() { }

	ngOnInit() {
	}


}
