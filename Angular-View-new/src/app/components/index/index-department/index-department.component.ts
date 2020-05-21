import { Component, OnInit, Input, ViewChild, Inject } from "@angular/core";
import { SwiperConfigInterface, SwiperDirective } from "ngx-swiper-wrapper";
import { DOCUMENT } from "@angular/common";
import { Category } from "src/core/models/Category.model";
import { HttpService, InputRequestOption } from "src/core/services/http.service";
import { API } from 'src/core/configs/api';

@Component({
	selector: "app-index-department",
	templateUrl: "./index-department.component.html",
	styleUrls: ["./index-department.component.scss"],
})
export class IndexDepartmentComponent implements OnInit {
	sliderIndexDepartmentConfig: SwiperConfigInterface = {
		slidesPerView: 3,
		spaceBetween: 30,
		observeParents: true,
		observer: true,
		loop: true,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
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
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	};
	departments: Array<Category>;
	@Input("language") currentLanguage: string;
	@ViewChild(SwiperDirective, { static: false }) swiperView: SwiperDirective;

	constructor(
		private httpSvc: HttpService,
		@Inject(DOCUMENT) private documentDom: Document
	) { }

	ngOnInit() {
		this.getDepartments();
	}

	setSizeSlideItem(e) {
		const RATIO = 374 / 278;
		const swiperDOM = <HTMLElement>e.$wrapperEl[0];
		const slides = swiperDOM.querySelectorAll(".swiper-slide");
		for (let i = 0; i < slides.length; i++) {
			const item = <HTMLElement>slides[i];
			const itemWidth = item.clientWidth;
			const itemDescription = <HTMLElement>(
				item.querySelector(".description")
			);
			const itemImage = <HTMLElement>item.querySelector(".img");
			itemImage.style.height = `${itemWidth / RATIO}px`;
			itemDescription.setAttribute(
				"data-default-height",
				itemDescription.clientHeight.toString()
			);
			itemDescription.setAttribute(
				"data-hovered-height",
				(itemWidth / RATIO).toString()
			);

			const currentHeight = Number(
				itemDescription.getAttribute("data-default-height")
			);
			itemDescription.style.height = `${currentHeight}px`;
			if (this.documentDom.body.clientWidth > 1024) {
				item.addEventListener("mouseenter", () => {
					itemDescription.style.height = `${Number(
						itemDescription.getAttribute("data-hovered-height")
					)}px`;
				});
				item.addEventListener("mouseleave", () => {
					itemDescription.style.height = `${Number(
						itemDescription.getAttribute("data-default-height")
					)}px`;
				});
			}
		}
	}

	getDepartments() {
		const option = new InputRequestOption();
		option.params = {
			templates: '4'
		}
		this.httpSvc.get(API.Category.Get_by_Templates, option).subscribe((result) => {
			this.departments = result.data;
			this.departments.shift();
			// console.log(this.departments);
		});
	}
}
