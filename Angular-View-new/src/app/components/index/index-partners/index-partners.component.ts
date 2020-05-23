import { Component, OnInit } from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";

@Component({
	selector: "app-index-partners",
	templateUrl: "./index-partners.component.html",
	styleUrls: ["./index-partners.component.scss"],
})
export class IndexPartnersComponent implements OnInit {
	sliderPartnersConfig: SwiperConfigInterface = {
		slidesPerView: 2,
		loop: true,
		loopAdditionalSlides: 2,
		speed: 1200,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
		},
	};

	constructor() { }

	ngOnInit() { }
}
