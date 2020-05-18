import {
	Component,
	Input,
	Output,
	EventEmitter,
	AfterViewInit,
	AfterViewChecked,
} from '@angular/core'
import * as _ from 'underscore'

@Component({
	selector: 'app-paging',
	templateUrl: './paging.component.html',
	styleUrls: ['./paging.component.scss'],
})
export class PagingComponent implements AfterViewInit {
	// array of all items to be paged
	@Input() public _total: number = 2
	@Input() set total(value: number) {
		this._total = value
		if (this.initPageCompleted) {
			this.setPage(1)
		}
	}

	@Input() public _pageSize: number = 1
	@Input() set pageSize(value: number) {
		this._pageSize = value
		if (this.initPageCompleted) {
			this.setPage(1)
		}
	}

	@Output() public OnPageChanged: EventEmitter<number> = new EventEmitter<
		number
	>()

	public pager: any = {
		pages: [],
	}
	public initPageCompleted: boolean = false

	constructor() {}

	public ngAfterViewInit(): void {
		this.setPage(1)
	}

	setPage(page: number) {
		if (page < 1) {
			return
		}

		// get pager object from service
		this.pager = this.getPager(this._total, page, this._pageSize)

		// get current page of items: raise event
		if (!this.initPageCompleted) {
			this.initPageCompleted = true
			setTimeout(() => {
				this.OnPageChanged.emit(this.pager.currentPage)
			}, 1)
		} else {
			this.OnPageChanged.emit(this.pager.currentPage)
		}
	}

	private getPager(
		totalItems: number,
		currentPage: number = 1,
		_pageSize: number = 10
	) {
		// calculate total pages
		const totalPages = Math.ceil(totalItems / _pageSize)
		let startPage: number, endPage: number
		if (totalPages <= 5) {
			startPage = 1
			endPage = totalPages
		} else {
			if (currentPage <= 3) {
				startPage = 1
				endPage = 5
			} else if (currentPage + 1 >= totalPages) {
				startPage = totalPages - 4
				endPage = totalPages
			} else {
				startPage = currentPage - 2
				endPage = currentPage + 2
			}
		}

		// calculate start and end item indexes
		const startIndex = (currentPage - 1) * _pageSize
		const endIndex = Math.min(startIndex + _pageSize - 1, totalItems - 1)

		// create an array of pages to ng-repeat in the pager control
		const pages = _.range(startPage, endPage + 1)

		return {
			totalItems: totalItems,
			currentPage: currentPage,
			pageSize: _pageSize,
			totalPages: totalPages,
			startPage: startPage,
			endPage: endPage,
			startIndex: startIndex,
			endIndex: endIndex,
			pages: pages,
		}
	}
}
