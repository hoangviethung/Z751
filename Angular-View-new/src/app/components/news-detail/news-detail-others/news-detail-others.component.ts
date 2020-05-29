import { Component, OnInit, Input } from "@angular/core";
import { ArticleModel } from "src/core/models/Article.model";

@Component({
	selector: "app-news-detail-others",
	templateUrl: "./news-detail-others.component.html",
	styleUrls: ["./news-detail-others.component.scss"],
})
export class NewsDetailOthersComponent implements OnInit {
	@Input("newsOthers") newsOthers: Array<ArticleModel>;

	constructor() {}

	ngOnInit() {}
}
