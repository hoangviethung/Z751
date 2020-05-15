import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LanguageService } from "src/core/services/language.service";
import { HttpService } from "src/core/services/http.service";
import { PageInfoService } from "src/core/services/page-info.service";
import { SwiperConfigInterface, SwiperDirective } from "ngx-swiper-wrapper";
import { ProductModel } from "src/core/models/Product.model";

@Component({
	selector: "app-capacity-detail",
	templateUrl: "./capacity-detail.component.html",
	styleUrls: ["./capacity-detail.component.scss"],
})
export class CapacityDetailComponent implements OnInit {
	productUrl: string;
	productCategoryUrl: string;
	productCategory: string;
	currentLanguage: string;
	product: ProductModel;
	Breadcrumb = {
		en: ["Home", "Capacities"],
		vi: ["Trang chủ", "Năng lực"],
	};
	breadcrumbs;

	@ViewChild(SwiperDirective, { static: false })
	thumbsSlider: SwiperDirective;
	@ViewChild(SwiperDirective, { static: false })
	previewSlider: SwiperDirective;

	thumbsSliderConfig: SwiperConfigInterface = {
		direction: "vertical",
		spaceBetween: 20,
		slidesPerView: 3,
		loop: true,
		observer: true,
		observeParents: true,
		slideToClickedSlide: true,
		navigation: {
			nextEl: ".preview-img-wrapper .swiper-button-next",
			prevEl: ".preview-img-wrapper .swiper-button-prev",
		},
		breakpoints: {
			575: {
				spaceBetween: 10,
				direction: "horizontal",
			},
		},
	};

	previewSliderConfig: SwiperConfigInterface = {
		simulateTouch: false,
		speed: 500,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		loopedSlides: 5,
		navigation: {
			nextEl: ".preview-img-wrapper .swiper-button-next",
			prevEl: ".preview-img-wrapper .swiper-button-prev",
		},
	};

	constructor(
		private activatedRoute: ActivatedRoute,
		private languageSvc: LanguageService,
		private httpSvc: HttpService,
		private pageSvc: PageInfoService
	) {
		
	}

	ngOnInit() {
		this.fetchProductCategory();
		this.getProductDetail();
	}

	getProductDetail() {
		this.activatedRoute.params.subscribe(async (param) => {
			this.productCategoryUrl = param.capacityCategory;
			let Breadcrumb = {
				en: ["Home", "Capacities"],
				vi: ["Trang chủ", "Năng lực"],
			};
			await this.httpSvc
				.get(
					`assets/api/${this.currentLanguage}/capacity/${this.productCategoryUrl}.json`
				)
				.subscribe((result) => {
					Breadcrumb[this.currentLanguage].push(result.data.Title);
					this.breadcrumbs = Breadcrumb[this.currentLanguage];
				});
			await this.httpSvc
				.get(
					`assets/api/${this.currentLanguage}/capacity/capacity-detail.json`
				)
				.subscribe((result) => {
					this.product = result.data;
					this.pageSvc.setTitle(this.product.Title);
					Breadcrumb[this.currentLanguage].push(result.data.Title);
					this.breadcrumbs = Breadcrumb[this.currentLanguage];
				});
		});
	}

	fetchProductCategory() {
		const url = `assets/api/${this.currentLanguage}/capacity/categories-capacity.json`;
		this.httpSvc.get(url).subscribe((result) => {
			this.productCategory = result.data;
		});
	}

	changeBigSlider(e) {
		const getSwiperSlideDom = (htmlNode: HTMLElement) => {
			if (Array.from(htmlNode.classList).includes("swiper-slide")) {
				return htmlNode;
			} else {
				return getSwiperSlideDom(htmlNode.parentElement);
			}
		};
		const clickedIndex = Number(
			getSwiperSlideDom(<HTMLElement>e.target).getAttribute(
				"data-swiper-slide-index"
			)
		);
		this.previewSlider.setIndex(clickedIndex);
	}
}
