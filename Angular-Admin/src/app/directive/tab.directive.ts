import {
	Directive,
	ElementRef,
	AfterContentInit,
	AfterViewInit,
} from '@angular/core'
@Directive({
	selector: '[appTab]',
})
export class TabDirective implements AfterViewInit {
	constructor(private elementRef: ElementRef) {}

	ngAfterViewInit(): void {
		//Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
		//Add 'implements AfterViewInit' to the class.
		const tabContainer: HTMLElement = this.elementRef.nativeElement
		const tabButtons = Array.from(
			tabContainer.querySelectorAll('[toggle-for]')
		)
		const tabContents = Array.from(
			tabContainer.querySelectorAll('[tab-id]')
		)
		for (let i = 0; i < tabButtons.length; i++) {
			const button = tabButtons[i]
			button.addEventListener('click', () => {
				const contentId = button.getAttribute('toggle-for')
				for (let j = 0; j < tabContents.length; j++) {
					if (tabContents[j].getAttribute('tab-id') == contentId) {
						tabContents[j].classList.add('show')
					} else {
						tabContents[j].classList.remove('show')
					}
					if (tabButtons[j].getAttribute('toggle-for') == contentId) {
						tabButtons[j].classList.add('active')
					} else {
						tabButtons[j].classList.remove('active')
					}
				}
			})
		}
	}
}
