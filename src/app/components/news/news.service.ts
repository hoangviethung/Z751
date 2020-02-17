import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class NewsService {

	isNewsListLoaded: boolean = false;

	constructor() { }

	setNewsListLoadedState() {
		this.isNewsListLoaded = true;
	}
}
