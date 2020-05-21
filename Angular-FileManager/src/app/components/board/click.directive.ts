import { Directive, HostListener, Input, Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Injectable()

@Directive({
	selector: '[clickDirective]'
})

export class ClickDirective {
	@Input() file;
	timer: any = 0;
	isSingleClick = false;

	times = 0;

	constructor(
		@Inject(DOCUMENT) document: Document,
		private toastrSvc: ToastrService
	) { }

	@HostListener('click') onClicked() {
		this.isSingleClick = true;
		setTimeout(() => {
			if (this.isSingleClick) {
				// doTheStuffHere();
			}
		}, 250)
	}

	@HostListener('dblclick') onDoubleClicked() {
		const urlImage = this.file.path;
		console.log(urlImage);
		this.toastrSvc.success(`Đã coppy !!!`);
	}
}
