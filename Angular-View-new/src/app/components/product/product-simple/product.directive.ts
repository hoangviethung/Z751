import { Directive, ElementRef, OnInit, HostListener } from "@angular/core";

@Directive({
	selector: "[productSimple]",
})
export class ProductDirective implements OnInit {
	constructor(private elementRef: ElementRef) {}

	ngOnInit() {
		this.calculateSize();
	}

	@HostListener("window:resize")
	onResize() {
		this.calculateSize();
	}

	calculateSize() {
		const productItem = <HTMLElement>this.elementRef.nativeElement;
		const productImg = <HTMLElement>productItem.querySelector(".img");
		if (productImg) {
			const width = productImg.clientWidth;
			const ratio = 380 / 278;
			productImg.style.height = width / ratio + "px";
		}
	}
}
