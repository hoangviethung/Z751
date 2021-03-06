import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Injectable({
	providedIn: "root",
})
export class PageInfoService {
	constructor(private titleService: Title) {}

	public setTitle(newTitle: string) {
		this.titleService.setTitle(newTitle);
	}

	public getTitle() {
		return this.titleService.getTitle();
	}
}
