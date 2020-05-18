import { Injectable, ElementRef } from '@angular/core'

@Injectable()
export class FooterService {
	public elementRef: ElementRef

	/**
	 * [offsetHeight description]
	 * @method offsetHeight
	 * @return [description]
	 */
	public get offsetHeight(): number {
		console.log(this.elementRef);
		return this.elementRef.nativeElement.offsetHeight
	}
}
