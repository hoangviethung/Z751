import {
	Directive,
	HostListener,
	Input,
	Injectable,
	Inject,
	ElementRef,
	EventEmitter,
	Output,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Injectable()
@Directive({
	selector: '[clickDirective]',
})
export class ClickDirective {
	@Input() file;
	@Input() SelectedFiles;
	@Output() toogleSelectedFiles = new EventEmitter<any>();
	timer: any = 0;
	isSingleClick = false;
	times = 0;

	constructor(
		@Inject(DOCUMENT) document: Document,
		private toastrSvc: ToastrService,
		private elementRef: ElementRef
	) {}

	@HostListener('click', ['$event']) onClicked(event) {
		if (event.shiftKey) {
			this.SelectedFiles.push(this.file);
		} else if (event.ctrlKey) {
			const index: number = this.SelectedFiles.indexOf(this.file);
			if (index !== -1) {
				this.SelectedFiles.splice(index, 1);
			} else {
				this.SelectedFiles.push(this.file);
			}
		} else {
			this.SelectedFiles = [];
			this.SelectedFiles.push(this.file);
		}

		this.toogleSelectedFiles.emit(this.SelectedFiles);
	}

	// COPPY PATH URL IMAGE
	@HostListener('dblclick') onDoubleClicked() {
		const item: HTMLElement = this.elementRef.nativeElement;
		const url = item.querySelector('.path-image-item') as HTMLInputElement;
		url.select();
		url.focus();
		url.setSelectionRange(0, 99999);
		console.log(url)
		document.execCommand('copy');
		this.toastrSvc.success(`Đã coppy !!!`);
	}
}
