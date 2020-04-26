import { Directive, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';
import { log } from 'util';
@Directive({
	selector: '[appTab]'
})
export class TabDirective implements AfterViewInit {

	constructor(
		private elementRef: ElementRef
	) { }

	ngAfterViewInit(): void {
		//Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
		//Add 'implements AfterViewInit' to the class.
		const toggle = this.elementRef.nativeElement.querySelectorAll('[toggle-for]')
		const content = this.elementRef.nativeElement.querySelectorAll('[tab-id]')
		toggle.forEach((item, index) => {
			item.addEventListener('click', (e) => {
				item.classList.add('active');
				const toggleForId = item.getAttribute('toggle-for');
				const toggleId = this.elementRef.nativeElement.querySelector(`[tab-id="${toggleForId}"]`);
				toggleId.classList.add('show');
				content.forEach((itemContent, indexContent) => {
					console.log(content[index]);
					if (index != indexContent) {
						content[indexContent].classList.remove('show');
						toggle[indexContent].classList.remove('active');
					}
				})
			})
		});
	}
}
