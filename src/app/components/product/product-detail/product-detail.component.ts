import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperConfigInterface, SwiperDirective, SwiperComponent } from 'ngx-swiper-wrapper';
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import { HttpService } from 'src/app/shared/services/http.service';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {

	tabId = 1;
	productCategory;
	productId: string;
	currentLocale: string;

	@ViewChild(SwiperDirective, { static: false }) thumbsSlider: SwiperDirective;
	@ViewChild(SwiperDirective, { static: false }) previewSlider: SwiperDirective;

	thumbsSliderConfig: SwiperConfigInterface = {
		direction: 'vertical',
		spaceBetween: 20,
		slidesPerView: 3,
		loop: true,
		observer: true,
		observeParents: true,
		slideToClickedSlide: true,
		navigation: {
			nextEl: '.preview-img-wrapper .swiper-button-next',
			prevEl: '.preview-img-wrapper .swiper-button-prev',
		},
		breakpoints: {
			575: {
				spaceBetween: 10,
				direction: 'horizontal',
			}
		}
	}

	previewSliderConfig: SwiperConfigInterface = {
		simulateTouch: false,
		speed: 500,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		loopedSlides: 5,
		navigation: {
			nextEl: '.preview-img-wrapper .swiper-button-next',
			prevEl: '.preview-img-wrapper .swiper-button-prev',
		},
	}

	constructor(
		private activatedRouteSvc: ActivatedRoute,
		private languageSvc: LanguageService,
		private httpSvc: HttpService,
	) {
		this.currentLocale = this.languageSvc.getCurrentLanguage();
	}

	ngOnInit() {
		this.fetchProductCategory();
		this.getParamId();
	}

	getParamId() {
		this.activatedRouteSvc.params.subscribe(param => {
			this.productId = param.id;
		})
	}

	fetchProductCategory() {
		const url = `assets/db/${this.currentLocale}/category-product.json`;
		this.httpSvc.get(url).subscribe(
			result => {
				this.productCategory = result.data;
			}
		)
		this.languageSvc.getCurrentLanguageWhenChangeLanguage().subscribe(lang => {
			const url = `assets/db/${lang}/category-product.json`;
			this.httpSvc.get(url).subscribe(
				result => {
					this.productCategory = result.data;
				}
			)
		})
	}

	changeTab(id: number) {
		this.tabId = id;
	}

	changeBigSlider(e) {
		const getSwiperSlideDom = (htmlNode: HTMLElement) => {
			if (Array.from(htmlNode.classList).includes('swiper-slide')) {
				return htmlNode;
			} else {
				return getSwiperSlideDom(htmlNode.parentElement)
			}
		}
		const clickedIndex = Number(getSwiperSlideDom((<HTMLElement>e.target)).getAttribute('data-swiper-slide-index'));
		this.previewSlider.setIndex(clickedIndex);
	}
}
