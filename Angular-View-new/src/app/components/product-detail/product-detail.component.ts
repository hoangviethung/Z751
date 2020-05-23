import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { SwiperConfigInterface, SwiperDirective } from "ngx-swiper-wrapper";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { ProductModel } from "src/core/models/Product.model";
import { Category } from "src/core/models/Category.model";
import { API } from "src/core/configs/api";
import { PaginationModel } from "src/core/models/Pagination.model";
import {
	PageInfoService,
	MetaModel,
} from "src/core/services/page-info.service";
import { DOCUMENT } from "@angular/common";

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
	breadcrumbs;

	@ViewChild(SwiperDirective, { static: false })
	thumbsSlider: SwiperDirective;
	@ViewChild(SwiperDirective, { static: false })
	previewSlider: SwiperDirective;

	thumbsSliderConfig: SwiperConfigInterface = {
		direction: "horizontal",
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
			576: {
				slidesPerView: 5,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 10,
				direction: "vertical",
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
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		@Inject(DOCUMENT) private document: Document
	) {}

	ngOnInit() {
		const pathname = this.document.location.pathname;
		const opts = new InputRequestOption();
		opts.params = {
			url: pathname,
		};
		this.getProductDetail();
		this.setPageInformation(opts);
	}

	setPageInformation(opts) {
		this.httpSvc.get(API.Common.Breadcrumb, opts).subscribe((response) => {
			this.breadcrumbs = response.data;
		});
	}

	showPopup(condition: any) {
		if (condition != null) {
			this.isShowPopup = condition;
		} else {
			this.isShowPopup = !this.isShowPopup;
		}
	}

	getProductDetail() {
		const productUrl = this.document.location.pathname;
		const opts = new InputRequestOption();
		opts.params = {
			url: productUrl,
		};
		this.httpSvc.get(API.Product.Get, opts).subscribe((response) => {
			this.product = response.data;
			const metaObject: MetaModel = {
				title: response.data.metaTitle,
				keywords: response.data.metaKeywords,
				description: response.data.metaDescription,
				image: response.data.metaImage,
			};
			this.pageInfoSvc.setTitle(response.data.title);
			this.pageInfoSvc.setMeta(metaObject);
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
