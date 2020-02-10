import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { TranslateService } from '@ngx-translate/core';
import { SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';

@Component({
	selector: 'app-activities-image',
	templateUrl: './activities-image.component.html',
	styleUrls: ['./activities-image.component.scss']
})
export class ActivitiesImageComponent implements OnInit {
	imageUrl = 'assets/db/vi/activities-images.json';
	images = [];

	@ViewChild(SwiperDirective, { static: false }) smallSlider: SwiperDirective;
	@ViewChild(SwiperDirective, { static: false }) bigSlider: SwiperDirective;

	smallSliderConfig: SwiperConfigInterface = {
		slidesPerView: 5,
		spaceBetween: 55,
		loop: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.slider-reward .swiper-button-next',
			prevEl: '.slider-reward .swiper-button-prev',
		},
		breakpoints: {
			1025: {
				spaceBetween: 30,
			},
			768: {
				spaceBetween: 15,
				slidesPerView: 2,
			}
		}
	}
	bigSliderConfig: SwiperConfigInterface = {
		slidesPerView: 1,
		speed: 500,
		spaceBetween: 55,
		observer: true,
		observeParents: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		navigation: {
			nextEl: '.slider-reward .swiper-button-next',
			prevEl: '.slider-reward .swiper-button-prev',
		},
		breakpoints: {
			1025: {
				spaceBetween: 30,
			},
			768: {
				spaceBetween: 15,
				slidesPerView: 2,
			}
		},
	}

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		private translateSvc: TranslateService
	) { }

	getImages() {
		this.httpSvc.get(this.imageUrl).subscribe(result => {
			this.images = result.data;
		});
	}

	ngOnInit() {
		this.pageInfoSvc.setTitle(this.translateSvc.instant('menu.images'));
		this.getImages();
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
		this.bigSlider.setIndex(clickedIndex);
	}
}
