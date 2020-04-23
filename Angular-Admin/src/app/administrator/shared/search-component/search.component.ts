import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef,
} from '@angular/core'
import { AppConsts } from '../../../../core/constant/AppConsts'
const dateFormat = require('dateformat')

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
	@Input() public key: string = ''
	@Input() public type: string = 'text' //default is a text
	@Input() public dataSource: any[]
	@Output() public OnChanged: EventEmitter<any> = new EventEmitter<any>()

	public data: string
	public dateDate: Date = new Date(Date.now())
	public allSelect: string = '<All selector>'
	public defaultId: string = AppConsts.defaultId
	public settings = {
		timePicker: false,
		format: 'MM-dd-yyyy',
		defaultOpen: false,
		closeOnSelect: true,
	}

	private listOfTypes: string[] = [
		'text',
		'boolean',
		'select',
		'date',
		'number',
	]

	constructor(private ref: ElementRef) {}

	public mainClick() {
		if (this.type === 'text') {
			return
		}
		const element = this.ref.nativeElement.querySelector('.input-support')
		if (this.type === 'select') {
			element.focus()
			element.size = 5
			element.style.height = (this.dataSource.length + 1) * 20 + 'px'
			element.style.top = '35px'
		} else if (this.type === 'date') {
			element.style.top = '5px'
			const childElement = this.ref.nativeElement.querySelector(
				'.input-support .wc-date-container'
			)
			childElement.focus()
			childElement.click()
		}
	}

	public selectChanged(event: any) {
		const element = this.ref.nativeElement.querySelector('.input-support')
		element.style.top = '0px'
		element.style.height = '30px'
		this.data = event
		if (event === this.allSelect) {
			this.OnChanged.emit({
				key: this.key,
				value: undefined,
				type: this.type,
			})
		} else {
			this.OnChanged.emit({
				key: this.key,
				value: this.dataSource.find(
					(d) =>
						d.name === event ||
						d.displayName === event ||
						d.title === event
				).id,
				type: this.type,
			})
		}
	}

	public selectLoseFocus() {
		const element = this.ref.nativeElement.querySelector('.input-support')
		element.style.top = '0px'
		element.style.height = '30px'
	}

	public onDateSelect(event: any) {
		const element = this.ref.nativeElement.querySelector('.input-support')
		element.style.top = '0px'
		this.data = `${
			event.getMonth() + 1
		}/${event.getDate()}/${event.getFullYear()}`
		this.OnChanged.emit({
			key: this.key,
			value: this.data,
			type: this.type,
		})
	}

	public onValueChanged() {
		if (this.type === 'text' || this.type === 'number') {
			this.OnChanged.emit({
				key: this.key,
				value: this.data,
				type: this.type,
			})
		}
	}

	public removeData() {
		this.data = ''
		this.OnChanged.emit({
			key: this.key,
			value: undefined,
			type: this.type,
		})
	}
}
