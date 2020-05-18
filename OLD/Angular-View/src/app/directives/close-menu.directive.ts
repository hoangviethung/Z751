import { Directive, OnInit, ElementRef, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Directive({
	selector: "[appCloseMenu]",
})
export class CloseMenuDirective implements OnInit {
	constructor(
		private elemenRef: ElementRef,
		@Inject(DOCUMENT) private document: Document
	) {}

	ngOnInit() {
		const document = this.document;
		const anchor = <HTMLElement>this.elemenRef.nativeElement;
		const header = document.querySelector("header");
		const body = document.querySelector("body");
		const overlay = header.querySelector(".overlay");
		const navSubs = header.querySelectorAll(".nav-sub");

		const getNavbar = (element) => {
			if (element.classList.contains("navbar")) {
				return element;
			} else {
				return getNavbar(element.parentNode);
			}
		};

		anchor.addEventListener("click", () => {
			getNavbar(anchor).classList.remove("active");
			overlay.classList.remove("active");
			body.removeAttribute("style");
			navSubs.forEach((sub) => {
				sub.classList.remove("active");
			});
		});
	}
}
