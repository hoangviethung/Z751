import { Component, OnInit, Input } from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { HttpService } from "src/app/services/http.service";

@Component({
	selector: "app-capacity-others",
	templateUrl: "./capacity-others.component.html",
	styleUrls: ["./capacity-others.component.scss"],
})
export class CapacityOthersComponent implements OnInit {
	productOthers = [];
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
			nextEl: ".slider-product-others .swiper-button-next",
			prevEl: ".slider-product-others .swiper-button-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			575: {
				slidesPerView: 1,
			},
		},
	};

	@Input("language") currentLanguage: string;
	@Input("routeParamUrl") routeParamUrl: string;

	constructor(private httpSvc: HttpService) {}

	ngOnInit() {
		this.getProductOthers();
	}

	getProductOthers() {
		this.httpSvc
			.get(
				`assets/api/${this.currentLanguage}/capacity/${this.routeParamUrl}.json`
			)
			.subscribe((result) => {
				this.productOthers = result.Data.Products;
			});
	}
}
