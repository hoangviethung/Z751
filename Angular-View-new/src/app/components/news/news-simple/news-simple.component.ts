import { Component, OnInit, Input } from "@angular/core";
import { ArticleModel } from "src/core/models/Article.model";

@Component({
	selector: "app-news-simple",
	templateUrl: "./news-simple.component.html",
	styleUrls: ["./news-simple.component.scss"],
})
export class NewsSimpleComponent implements OnInit {
	@Input() news: ArticleModel;

	url: string;

	constructor() {}

	ngOnInit() {}
}
