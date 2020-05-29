import { Component, OnInit } from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { API } from "src/core/configs/api";
import { SectionModel } from "src/core/models/Section.model";
import { Image } from "src/core/models/Image.model";

@Component({
	selector: "app-index-partners",
	templateUrl: "./index-partners.component.html",
	styleUrls: ["./index-partners.component.scss"],
})
export class IndexPartnersComponent implements OnInit {
	defaultImage =
		"https://i1.wp.com/www.uminahairandbeauty.com.au/wp-content/uploads/2018/08/background-wallpaper-noisy-gray-light-and-white-color-small-random-spots-texture.jpg?fit=256%2C256&ssl=1";
	contentSection_8: SectionModel;
	listImages: Array<Image>;
	showLoading: boolean = false;
	sliderPartnersConfig: SwiperConfigInterface = {
		slidesPerView: 2,
		observer: true,
		observeParents: true,
		loop: true,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		// Disable preloading of all images
		preloadImages: false,
		// Enable lazy loading
		lazy: true,
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
		navigation: {
			nextEl: ".index-partner-slider .swiper-button-next",
			prevEl: ".index-partner-slider .swiper-button-prev",
		},
	};
	constructor(private httpSvc: HttpService) {}

	ngOnInit() {
		this.getPartners();
	}

	getPartners() {
		const option = new InputRequestOption();
		option.params = {
			template: "8",
		};
		this.httpSvc.get(API.Section.Get, option).subscribe((result) => {
			this.contentSection_8 = result.data;
			this.listImages = result.data.images;
			if (window.innerWidth <= 1200 && this.listImages.length > 5) {
				this.showLoading = true;
			} else if (window.innerWidth <= 768 && this.listImages.length > 4) {
				this.showLoading = true;
			} else if (window.innerWidth <= 576 && this.listImages.length > 3) {
				this.showLoading = true;
			} else if (window.innerWidth <= 575 && this.listImages.length > 2) {
				this.showLoading = true;
			}
		});
	}
}
