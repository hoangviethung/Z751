import {
	Directive,
	ElementRef,
	HostListener,
	AfterViewInit,
} from "@angular/core";

@Directive({
	selector: "[appIndexProductItem]",
})
export class IndexProductItemDirective implements AfterViewInit {
	ratio = 374 / 278;

	constructor(private elementRef: ElementRef) {}

	setEffect() {
		const item = this.elementRef.nativeElement;
		const itemWidth = item.clientWidth;
		const itemDescription = item.querySelector(".description");
		const itemImage = item.querySelector(".img");
		itemImage.style.height = `${itemWidth / this.ratio}px`;
		itemDescription.setAttribute(
			"data-default-height",
			itemDescription.clientHeight
		);
		itemDescription.setAttribute(
			"data-hovered-height",
			itemWidth / this.ratio
		);

		const currentHeight = Number(
			itemDescription.getAttribute("data-default-height")
		);
		itemDescription.style.height = `${currentHeight}px`;
	}

	@HostListener("mouseenter") onMouseEnter() {
		const itemDescription = this.elementRef.nativeElement.querySelector(
			".description"
		);
		itemDescription.style.height = `${Number(
			itemDescription.getAttribute("data-hovered-height")
		)}px`;
	}

	@HostListener("mouseleave") onMouseLeave() {
		const itemDescription = this.elementRef.nativeElement.querySelector(
			".description"
		);
		itemDescription.style.height = `${Number(
			itemDescription.getAttribute("data-default-height")
		)}px`;
	}

	@HostListener("window:resize") onResize() {
		this.setEffect();
	}

	ngAfterViewInit() {
		this.setEffect();
	}
}
