import { Injectable } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

export class MetaModel {
	title: string;
	description: string;
	keywords: string;
	image: string;
}

@Injectable({
	providedIn: "root",
})
export class PageInfoService {
	constructor(private titleService: Title, private meta: Meta) {}

	public setTitle(newTitle: string) {
		this.titleService.setTitle(newTitle);
	}

	public getTitle() {
		return this.titleService.getTitle();
	}

	public setMeta(MetaObject: MetaModel) {
		this.meta.updateTag({
			name: "image",
			content: MetaObject.image,
		});
		this.meta.updateTag({
			name: "description",
			content: MetaObject.description,
		});
		this.meta.updateTag({
			name: "keywords",
			content: MetaObject.keywords,
		});
		this.meta.updateTag({
			name: "title",
			content: MetaObject.title,
		});
	}
}
