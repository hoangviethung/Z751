import {
	Component,
	OnInit,
	Input,
	ViewChild,
	AfterViewInit,
} from "@angular/core";
import { SwiperConfigInterface, SwiperDirective } from "ngx-swiper-wrapper";
import { HttpService } from "src/core/services/http.service";
import { ProductModel } from "src/core/models/Product.model";

@Component({
	selector: "app-product-others",
	templateUrl: "./product-others.component.html",
	styleUrls: ["./product-others.component.scss"],
})
export class ProductOthersComponent implements OnInit, AfterViewInit {
	productOthers: Array<ProductModel>;
	sliderProductOthers: SwiperConfigInterface = {
		initialSlide: 0,
		slidesPerView: 3,
		direction: "horizontal",
		loop: true,
		speed: 1200,
		spaceBetween: 30,
		observer: true,
		observeParents: true,
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
	ngAfterViewInit() {}

	getProductOthers() {
		this.httpSvc
			.get(
				`assets/api/${this.currentLanguage}/product/${this.routeParamUrl}.json`
			)
			.subscribe((result) => {
				this.productOthers = result.data.Products;
			});
	}
}
