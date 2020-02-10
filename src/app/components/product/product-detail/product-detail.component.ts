import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperConfigInterface, SwiperDirective, SwiperComponent } from 'ngx-swiper-wrapper';
import { ActivatedRoute } from '@angular/router';
@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {

	@ViewChild(SwiperDirective, { static: false }) thumbs: SwiperDirective;
	@ViewChild(SwiperDirective, { static: false }) preview: SwiperDirective;

	thumbsSliderConfig: SwiperConfigInterface = {
		direction: 'vertical',
		spaceBetween: 20,
		slidesPerView: 3,
		loopedSlides: 5,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		slideToClickedSlide: true,
		navigation: {
			nextEl: '.preview-img-wrapper .swiper-button-next',
			prevEl: '.preview-img-wrapper .swiper-button-prev',
		},
		breakpoints: {
			1025: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			}
		}
	}

	previewSliderConfig: SwiperConfigInterface = {
		simulateTouch: false,
		loopedSlides: 5,
		thumbs: {
			swiper: this.thumbs,
		},
		navigation: {
			nextEl: '.preview-img-wrapper .swiper-button-next',
			prevEl: '.preview-img-wrapper .swiper-button-prev',
		},
	}

	constructor(
		private activatedRouteSvc: ActivatedRoute
	) { }

	ngOnInit() {
		// console.log(
		// 	this.activatedRouteSvc.snapshot.paramMap.get('productId')
		// );
	}

	changeBigSlider(e) {
		const clickedIndex = Number((<HTMLElement>e.target).getAttribute('data-swiper-slide-index'));
		this.preview.setIndex(clickedIndex);
	}
}
