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
	constructor(private titleService: Title, private tagSvc: Meta) {}

	public setTitle(newTitle: string) {
		this.titleService.setTitle(newTitle);
	}

	public addMeta(metaObj: MetaModel) {
		return this.tagSvc.addTags([
			{
				name: "title",
				content: metaObj.title,
			},
			{
				name: "description",
				content: metaObj.description,
			},
			{
				name: "keywords",
				content: metaObj.keywords,
			},
			{
				name: "image",
				content: metaObj.image,
			},
		]);
	}
}
