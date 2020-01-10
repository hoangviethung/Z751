import { Directive, ElementRef, HostListener, AfterViewInit, PlatformRef } from '@angular/core';

@Directive({
	selector: '[appIndexNewsItem]'
})
export class IndexNewsItemDirective implements AfterViewInit {

	ratio = 578 / 350;

	constructor(private elementRef: ElementRef) { }

	setEffect() {
		const item = this.elementRef.nativeElement;
		const itemWidth = item.querySelector('.img').clientWidth;
		const itemDescription = item.querySelector('.description');
		item.querySelector('.img').style.height = `${itemWidth / this.ratio}px`;
	}

	@HostListener('window:resize') onResize() {
		this.setEffect();
	}

	ngAfterViewInit() {
		this.setEffect();
	}

}
