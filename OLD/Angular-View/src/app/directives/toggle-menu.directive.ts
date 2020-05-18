import { Directive, ElementRef, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Directive({
	selector: "[appToggleMenu]",
})
export class ToggleMenuDirective implements OnInit {
	constructor(
		private elemenRef: ElementRef,
		@Inject(DOCUMENT) private document: Document
	) {}

	ngOnInit() {
		const document = this.document;
		const hamburger = <HTMLElement>this.elemenRef.nativeElement;
		const body = document.querySelector("body");
		const header = document.querySelector("header");
		const navbar = header.querySelector(".navbar");
		const btnNavbarClose = header.querySelector(".navbar-close");
		const overlay = header.querySelector(".overlay");

		hamburger.addEventListener("click", () => {
			navbar.classList.add("active");
			overlay.classList.add("active");
			body.style.overflow = "hidden";
			body.style.height = "100vh";
		});

		btnNavbarClose.addEventListener("click", () => {
			navbar.classList.remove("active");
			overlay.classList.remove("active");
			body.removeAttribute("style");
		});
	}
}
