import { Component, OnInit, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { SwiperConfigInterface, SwiperDirective, SwiperComponent } from 'ngx-swiper-wrapper';

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {
	swiperConfig: SwiperConfigInterface = {
		slidesPerView: 1,
		loop: true,
		loopAdditionalSlides: 2,
		speed: 1200,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		observer: true,
		observeParents: true,
	}

	ngOnInit() {
	}

}
