import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
	selector: 'app-sort',
	templateUrl: './sort.component.html',
	styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
	@Input() public key: string = ''
	@Input() public text: string = 'text'
	@Output() public OnChanged: EventEmitter<any> = new EventEmitter<any>()

	@Input() public state: string = '' // '': Not sort, 'desc' and 'asc'

	constructor() {}

	public onChanged() {
		switch (this.state) {
			case '':
				this.OnChanged.emit({
					key: this.key,
					state: 'asc',
				})
				break
			case 'asc':
				this.OnChanged.emit({
					key: this.key,
					state: 'desc',
				})
				break
			case 'desc':
				this.OnChanged.emit({
					key: this.key,
					state: '',
				})
				break
			default:
				this.OnChanged.emit({
					key: this.key,
					state: '',
				})
				break
		}
	}
}
