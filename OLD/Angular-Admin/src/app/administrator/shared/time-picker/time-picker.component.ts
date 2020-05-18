import {
	Component,
	Input,
	Output,
	EventEmitter,
	OnChanges,
} from '@angular/core'
import * as _ from 'underscore'

@Component({
	selector: 'app-time-picker',
	templateUrl: './time-picker.component.html',
	styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent {
	private maxTime: number = 86399
	private minTime: number = 0
	public _data: number = 0
	@Input() set data(value: number) {
		this._data = value
		if (this._data > this.maxTime) {
			this._data = this.maxTime
		} else if (this._data < this.minTime) {
			this._data = this.minTime
		}
		this.draw()
	}

	get data() {
		return this._data
	}

	@Output() dataChange = new EventEmitter()

	public hours: number = 0
	public minutes: number = 0
	public seconds: number = 0

	@Output() public OnChanged: EventEmitter<number> = new EventEmitter<
		number
	>()

	public onChanged() {
		this._data = this.hours * 3600 + this.minutes * 60 + this.seconds * 1
		console.log(this._data)
		console.log({
			hours: this.hours,
			minutes: this.minutes,
			seconds: this.seconds,
		})
		this.dataChange.emit(this._data)
	}

	private draw() {
		this.hours = Math.floor(this._data / 3600)
		this.minutes = Math.floor(Math.floor(this._data % 3600) / 60)
		this.seconds = Math.floor(this._data % 60)

		const test = 360
		// tslint:disable-next-line: max-line-length
		// console.log({hours: Math.floor(this._data / 3600), minutes: Math.floor(Math.floor((this._data % 3600)) / 60), seconds: Math.floor(this._data % 60)});

		// console.log({ _data: this.data, hours: this.hours, minutes: this.minutes, seconds: this.seconds });
	}
}
