import {
	Directive,
	HostListener,
	Input,
	Injectable,
	Inject,
	ElementRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Injectable()
@Directive({
	selector: '[clickDirective]',
})
export class ClickDirective {
	@Input() file;
	timer: any = 0;
	isSingleClick = false;
	times = 0;

	constructor(
		@Inject(DOCUMENT) document: Document,
		private toastrSvc: ToastrService,
		private elementRef: ElementRef
	) {}

	@HostListener('click') onClicked() {
		this.isSingleClick = true;
		setTimeout(() => {
			if (this.isSingleClick) {
				// doTheStuffHere();
			}
		}, 250);
	}

	// COPPY PATH URL IMAGE
	@HostListener('dblclick') onDoubleClicked() {
		const item: HTMLElement = this.elementRef.nativeElement;
		const input = item.querySelector(
			'.path-image-item'
		) as HTMLInputElement;
		const fileUrl = input.value.replace('/dist/browser/', './');
		input.value = fileUrl;
		input.select();
		input.focus();
		input.setSelectionRange(0, 99999);
		document.execCommand('copy');
		this.toastrSvc.success(`Đã coppy !!!`);
	}
}
