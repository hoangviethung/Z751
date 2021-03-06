import { Component, OnInit, Input, ViewChild, Inject } from "@angular/core";
import { SwiperConfigInterface, SwiperDirective } from "ngx-swiper-wrapper";
import { HttpService } from "src/app/services/http.service";
import { Category } from "src/app/models/core/Category.model";
import { LanguageService } from "src/app/services/language.service";
import { DOCUMENT } from "@angular/common";

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

	getDepartments() {
		this.httpSvc
			.get(
				`/api/Category/used/get`
			)
			.subscribe((result) => {
				this.departments = result.data;
			});
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
}
