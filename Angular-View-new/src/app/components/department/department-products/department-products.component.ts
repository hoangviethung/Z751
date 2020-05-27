import {
	Component,
	OnInit,
	Input,
	ViewChild,
	QueryList,
	ElementRef,
} from "@angular/core";
import { ProductModel } from "src/core/models/Product.model";
import { SwiperConfigInterface, SwiperDirective } from "ngx-swiper-wrapper";

@Component({
	selector: "app-department-products",
	templateUrl: "./department-products.component.html",
	styleUrls: ["./department-products.component.scss"],
})
export class DepartmentProductsComponent implements OnInit {
	ngOnInit() {}
	sliderProductsConfig: SwiperConfigInterface = {
		slidesPerView: 3,
		slidesPerColumn: 2,
		loop: false,
		speed: 1200,
		spaceBetween: 20,
		observer: true,
		observeParents: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			1025: {
				slidesPerView: 3,
			},
			768: {
				spaceBetween: 15,
				slidesPerView: 2,
				slidesPerColumn: 1,
			},
		},
	};
	@ViewChild(SwiperDirective, { static: false }) swiperView: SwiperDirective;
	@Input("products") products: Array<ProductModel>;

	constructor() {}

	setSizeSlideitem(e) {
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
