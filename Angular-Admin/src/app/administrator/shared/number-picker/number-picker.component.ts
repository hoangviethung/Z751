import { Component, Input, Output, EventEmitter } from '@angular/core'
import * as _ from 'underscore'

@Component({
	selector: 'app-number-picker',
	templateUrl: 'number-picker.component.html',
	styleUrls: ['number-picker.component.scss'],
})
export class NumberPickerComponent {
	@Input() set data(value: number) {
		this._data = value
		this.dataChange.emit(this._data)
	}

	get data() {
		return this._data
	}

	@Output() dataChange = new EventEmitter()

	@Input() public min: number
	@Input() public max: number
	@Input() public isAliasRight: boolean = false

	@Output() public OnChanged: EventEmitter<number> = new EventEmitter<
		number
	>()
	@Output() public OnClicked: EventEmitter<number> = new EventEmitter<
		number
	>()

	private _data: number

	public onValueChanged(event: any) {
		if (event > this.max) {
			this.data = this.max
		} else if (event < this.min) {
			this.data = this.min
		} else {
			this.data = event
		}
		this.data = this.data * 1 // change string to number
		this.OnChanged.emit(this.data)
	}

	public onClick(event: any) {
		this.OnClicked.emit(event)
	}
}
