import { Directive, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[clickDirective]'
})
export class ClickDirective {
	@Input() file;
	timer: any = 0;
	isSingleClick = false;

	times = 0;

	constructor() { }

	@HostListener('click') onClicked() {
		this.isSingleClick = true;
		setTimeout(() => {
			if (this.isSingleClick) {
				// doTheStuffHere();
			}
		}, 250)
	}

	@HostListener('dblclick') onDoubleClicked() {
		// clearTimeout(this.timer);
		// this.prevent = true;
		console.log('onDoubleClicked ran!');
	}

}
