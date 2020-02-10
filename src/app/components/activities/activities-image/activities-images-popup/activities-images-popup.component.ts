import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';

@Component({
	selector: 'app-activities-images-popup',
	templateUrl: './activities-images-popup.component.html',
	styleUrls: ['./activities-images-popup.component.scss']
})
export class ActivitiesImagesPopupComponent implements OnInit {

	@Input() imageList;
	@Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

	@ViewChild(SwiperDirective, { static: false }) smallSlider: SwiperDirective;
	@ViewChild(SwiperDirective, { static: false }) bigSlider: SwiperDirective;

	smallSliderConfig: SwiperConfigInterface = {
		slidesPerView: 4,
		spaceBetween: 20,
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
		observer: true,
		observeParents: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		navigation: {
			nextEl: '.slider-reward .swiper-button-next',
			prevEl: '.slider-reward .swiper-button-prev',
		}
	}

	constructor() { }

	ngOnInit() {
		console.log(this.imageList);
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

	emitClickValue() {
		this.close.emit(false);
	}

}
