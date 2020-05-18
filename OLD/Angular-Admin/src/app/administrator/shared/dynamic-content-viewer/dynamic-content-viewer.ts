import {
	Component,
	ComponentFactoryResolver,
	Injector,
	ElementRef,
	Output,
	Input,
	EventEmitter,
	ComponentFactory,
	ComponentRef,
} from '@angular/core'

@Component({
	selector: 'app-content-viewer',
	template: '',
})
export class ContentViewer {
	private hostElement: HTMLElement

	@Output()
	docRendered = new EventEmitter()

	constructor(
		componentFactoryResolver: ComponentFactoryResolver,
		elementRef: ElementRef
	) {
		this.hostElement = elementRef.nativeElement
	}

	@Input()
	set content(content) {
		if (content) {
			this.build(content)
			this.docRendered.emit()
		}
	}

	private build(content) {
		this.hostElement.innerHTML = content || ''

		if (!content) {
			return
		}
	}
}
