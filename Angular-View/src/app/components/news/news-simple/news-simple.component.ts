import { Component, OnInit, Input } from "@angular/core";
import { Article } from "src/app/models/core/Article.model";

@Component({
	selector: "app-news-simple",
	templateUrl: "./news-simple.component.html",
	styleUrls: ["./news-simple.component.scss"],
})
export class NewsSimpleComponent implements OnInit {
	@Input() news: Article;

	url: string;

	constructor() {}

	ngOnInit() {}
}
