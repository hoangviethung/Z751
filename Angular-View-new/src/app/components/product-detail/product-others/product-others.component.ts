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
export class ProductOthersComponent implements OnInit {
	@Input("productOthers") productOthers: Array<ProductModel>;
	sliderProductOthers: SwiperConfigInterface = {
		initialSlide: 0,
		slidesPerView: 1,
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
				slidesPerView: 3,
				spaceBetween: 15,
			},
			575: {
				slidesPerView: 2,
			},
		},
	};
	@ViewChild(SwiperDirective, {
		static: false,
	})
	swiperView: SwiperDirective;

	constructor(private httpSvc: HttpService) {}

	ngOnInit() {
		// this.getProductOthers();
	}
}
