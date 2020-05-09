import {
	Directive,
	ElementRef,
	AfterViewInit,
	OnInit,
	Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
	selector: '[asideMenu]',
})
export class AsideMenuDirective implements OnInit, AfterViewInit {
	asideMenu: HTMLElement;
	constructor(
		private elementRef: ElementRef,
		@Inject(DOCUMENT) public document: Document
	) {
		this.asideMenu = <HTMLElement>this.elementRef.nativeElement;
	}

	ngOnInit() {}

	ngAfterViewInit() {
		const pathname = this.document.location.pathname;
		const links = Array.from(
			this.asideMenu.querySelectorAll(`.menu-title a`)
		);
		const link = <HTMLElement>links.find((link) => {
			const href = link.getAttribute('href');
			if (pathname.indexOf(href) >= 0) {
				return link;
			}
		});
		const menuItem = this.getAsideMenuFromChild(link);
		menuItem.classList.add('active');
		this.toggleMenu();
	}

	toggleMenu() {
		const menuItems = Array.from(
			this.asideMenu.querySelectorAll('.menu-item')
		);
		menuItems.forEach((item, indexCliked) => {
			item.addEventListener('click', () => {
				menuItems.forEach((item, index) => {
					if (index == indexCliked) {
						item.classList.toggle('active');
					} else {
						item.classList.remove('active');
					}
				});
			});
		});
	}

	getAsideMenuFromChild(node: HTMLElement) {
		if (node.parentElement.classList.contains('aside-menu')) {
			return node;
		} else {
			return this.getAsideMenuFromChild(node.parentElement);
		}
	}
}
