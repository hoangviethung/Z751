import {
	Component,
	OnInit,
	Input,
	ViewChild,
	AfterViewInit,
} from "@angular/core";
import { SwiperConfigInterface, SwiperDirective } from "ngx-swiper-wrapper";
import { HttpService } from "src/app/services/http.service";

@Component({
	selector: "app-product-others",
	templateUrl: "./product-others.component.html",
	styleUrls: ["./product-others.component.scss"],
})
export class ProductOthersComponent implements OnInit, AfterViewInit {
	productOthers = [];
	sliderProductOthers: SwiperConfigInterface = {
		initialSlide: 0,
		slidesPerView: 3,
		direction: "horizontal",
		loop: true,
		speed: 1200,
		spaceBetween: 30,
		observer: true,
		observeParents: true,
		scrollbar: false,
		keyboard: true,
		mousewheel: true,
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
	@ViewChild(SwiperDirective, {
		static: false,
	})
	swiperView: SwiperDirective;

	@Input("language") currentLanguage: string;
	@Input("routeParamUrl") routeParamUrl: string;

	constructor(private httpSvc: HttpService) {}

	ngOnInit() {
		this.getProductOthers();
	}
	ngAfterViewInit() {
		this.swiperView.setIndex(0, 1000);
	}

	getProductOthers() {
		this.httpSvc
			.get(
				`assets/api/${this.currentLanguage}/product/${this.routeParamUrl}.json`
			)
			.subscribe((result) => {
				this.productOthers = result.Data.Products;
			});
	}
}
