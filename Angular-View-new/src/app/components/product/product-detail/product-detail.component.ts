import { Component, OnInit, ViewChild } from "@angular/core";
import { SwiperConfigInterface, SwiperDirective } from "ngx-swiper-wrapper";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "src/core/services/http.service";
import { LanguageService } from "src/core/services/language.service";
import { PageInfoService } from "src/core/services/page-info.service";
import { ProductModel } from "src/core/models/Product.model";
import { Category } from "src/core/models/Category.model";

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
	product: ProductModel;
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
			768: {
				slidesPerView: 5,
				spaceBetween: 10,
				direction: "horizontal",
			},
			576: {
				slidesPerView: 3,
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
	isShowPopup: boolean = false;
	categoryOfProduct: Array<Category>;
	constructor(
		private activatedRoute: ActivatedRoute,
		private languageSvc: LanguageService,
		private httpSvc: HttpService,
		private pageSvc: PageInfoService
	) {}

	ngOnInit() {
		this.fetchProductCategory();
		this.getProductDetail();
	}

	showPopup(condition: any) {
		if (condition != null) {
			this.isShowPopup = condition;
		} else {
			this.isShowPopup = !this.isShowPopup;
		}
	}

	getProductDetail() {
		this.activatedRoute.params.subscribe(async (param) => {
			this.productCategoryUrl = param.productCategory;
			this.categoryOfProduct = [].concat({
				Title: this.productCategoryUrl,
			});
			console.log(this.categoryOfProduct);

			let Breadcrumb = {
				en: ["Home", "Products"],
				vi: ["Trang chủ", "Sản phẩm"],
			};
			await this.httpSvc
				.get(
					`assets/api/${this.currentLanguage}/product/${this.productCategoryUrl}.json`
				)
				.subscribe((result) => {
					Breadcrumb[this.currentLanguage].push(result.data.Title);
					this.breadcrumbs = Breadcrumb[this.currentLanguage];
				});
			await this.httpSvc
				.get(
					`assets/api/${this.currentLanguage}/product/product-detail.json`
				)
				.subscribe((result) => {
					this.product = result.data;
					this.pageSvc.setTitle(this.product.title);
					Breadcrumb[this.currentLanguage].push(result.data.Title);
					this.breadcrumbs = Breadcrumb[this.currentLanguage];
				});
		});
	}

	fetchProductCategory() {
		const url = `assets/api/${this.currentLanguage}/product/categories-product.json`;
		this.httpSvc.get(url).subscribe((result) => {
			this.productCategory = result.data;
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
