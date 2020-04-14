import { Component, OnInit, ViewChild } from "@angular/core";
import { SwiperConfigInterface, SwiperDirective } from "ngx-swiper-wrapper";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "src/app/services/http.service";
import { LanguageService } from "src/app/services/language.service";
import { PageInfoService } from "src/app/services/page-info.service";
import { Product } from "src/app/models/core/Product.model";

@Component({
	selector: "app-product-detail",
	templateUrl: "./product-detail.component.html",
	styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
	tabId = 1;
	productUrl: string;
	productCategoryUrl: string;
	productCategory: string;
	currentLanguage: string;
	product: Product;
	Breadcrumb = {
		en: ["Home", "Products"],
		vi: ["Trang chủ", "Sản phẩm"],
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
		this.currentLanguage = this.languageSvc.getCurrentLanguage();
	}

	ngOnInit() {
		this.fetchProductCategory();
		this.getProductDetail();
	}

	getProductDetail() {
		this.activatedRoute.params.subscribe(async (param) => {
			this.productCategoryUrl = param.productCategory;
			let Breadcrumb = {
				en: ["Home", "Products"],
				vi: ["Trang chủ", "Sản phẩm"],
			};
			await this.httpSvc
				.get(
					`assets/api/${this.currentLanguage}/product/${this.productCategoryUrl}.json`
				)
				.subscribe((result) => {
					Breadcrumb[this.currentLanguage].push(result.Data.Title);
					this.breadcrumbs = Breadcrumb[this.currentLanguage];
				});
			await this.httpSvc
				.get(
					`assets/api/${this.currentLanguage}/product/product-detail.json`
				)
				.subscribe((result) => {
					this.product = result.Data;
					this.pageSvc.setTitle(this.product.Title);
					Breadcrumb[this.currentLanguage].push(result.Data.Title);
					this.breadcrumbs = Breadcrumb[this.currentLanguage];
				});
		});
	}

	fetchProductCategory() {
		const url = `assets/api/${this.currentLanguage}/product/categories-product.json`;
		this.httpSvc.get(url).subscribe((result) => {
			this.productCategory = result.Data;
		});
	}

	changeTab(id: number) {
		this.tabId = id;
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
