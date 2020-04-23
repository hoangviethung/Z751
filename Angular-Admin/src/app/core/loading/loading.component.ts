import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core'

import { LoadingService } from './loading.service'

@Component({
	selector: 'app-loading',
	template: `
		<img src="/assets/img/loading.gif" class="ico-loading" />
		<div class="loading-background"></div>
	`,
})
export class LoadingComponent implements OnInit, OnDestroy {
	@Input() id: string
	private element: any

	constructor(
		private loadingService: LoadingService,
		private el: ElementRef
	) {
		this.element = el.nativeElement
	}

	ngOnInit(): void {
		const loading = this

		// ensure id attribute exists
		if (!this.id) {
			console.error('loading must have an id')
			return
		}

		// move element to bottom of page (just before </body>) so it can be displayed above everything else
		document.body.appendChild(this.element)

		// add self (this modal instance) to the modal service so it's accessible from controllers
		this.loadingService.add(this)
	}

	// remove self from modal service when directive is destroyed
	ngOnDestroy(): void {
		this.loadingService.remove(this.id)
		this.element.remove()
	}

	// open loading
	open(): void {
		this.element.style.display = 'block'
		document.body.classList.add('loading-open')
	}

	// close loading
	close(): void {
		this.element.style.display = 'none'
		document.body.classList.remove('loading-open')
	}
}
