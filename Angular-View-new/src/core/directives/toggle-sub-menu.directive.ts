import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
	selector: '[appCloseSubMenu]'
})
export class CloseSubMenuDirective implements OnInit {

	constructor(
		private elementRef: ElementRef
	) { }

	ngOnInit() {
		const item = (<HTMLElement>this.elementRef.nativeElement);
		const mainNav = item.closest('.nav-sub');

		item.addEventListener('click', () => {
			mainNav.classList.remove('active');
		})
	}
}
