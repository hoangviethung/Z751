import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
	selector: '[appToggleMenu]'
})
export class ToggleMenuDirective implements OnInit {

	constructor(
		private elemenRef: ElementRef
	) { }

	ngOnInit() {
		const hamburger = <HTMLElement>this.elemenRef.nativeElement;
		const body = document.querySelector('body');
		const header = document.querySelector('header')
		const navbar = header.querySelector('.navbar');
		const btnNavbarClose = header.querySelector('.navbar-close');
		const overlay = header.querySelector('.overlay');

		hamburger.addEventListener('click', () => {
			navbar.classList.add('active');
			overlay.classList.add('active');
			body.style.overflow = 'hidden';
			body.style.height = '100vh';
		})

		btnNavbarClose.addEventListener('click', () => {
			navbar.classList.remove('active');
			overlay.classList.remove('active');
			body.removeAttribute('style');
		})
	}
}
