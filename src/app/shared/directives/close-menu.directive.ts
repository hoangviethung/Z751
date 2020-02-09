import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
	selector: '[appCloseMenu]'
})
export class CloseMenuDirective implements OnInit {

	constructor(
		private elemenRef: ElementRef
	) { }

	ngOnInit() {
		const anchor = <HTMLElement>this.elemenRef.nativeElement;
		const header = document.querySelector('header');
		const overlay = header.querySelector('.overlay');
		const body = document.querySelector('body');

		const getNavbar = (element) => {
			if (Array.from(element.classList).includes('navbar')) {
				return element;
			} else {
				return getNavbar(element.parentNode);
			}
		}
		anchor.addEventListener('click', () => {
			getNavbar(anchor).classList.remove('active');
			overlay.classList.remove('active');
			body.removeAttribute('style');
		})
	}
}