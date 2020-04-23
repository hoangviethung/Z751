import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
	selector: '[appToggleSubMenu]'
})
export class ToggleSubMenuDirective implements OnInit {

	constructor(
		private elementRef: ElementRef
	) { }

	ngOnInit() {
		const item = (<HTMLElement>this.elementRef.nativeElement);
		const btnCloseNavSub = item.nextElementSibling.querySelector('.nav-sub-close');
		const mainNav = item.closest('.main-nav');

		item.addEventListener('click', () => {
			item.nextElementSibling.classList.toggle('active');
			mainNav.classList.toggle('active');
		})

		btnCloseNavSub.addEventListener('click', () => {
			item.nextElementSibling.classList.remove('active');
			mainNav.classList.remove('active');
		})
	}
}
