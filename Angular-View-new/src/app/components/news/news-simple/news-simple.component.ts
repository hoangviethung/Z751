import { Component, OnInit, Input } from "@angular/core";
import { ArticleModel } from "src/core/models/Article.model";

@Component({
	selector: "app-news-simple",
	templateUrl: "./news-simple.component.html",
	styleUrls: ["./news-simple.component.scss"],
})
export class NewsSimpleComponent implements OnInit {
	@Input() news: ArticleModel;
	defaultImage =
		"https://i1.wp.com/www.uminahairandbeauty.com.au/wp-content/uploads/2018/08/background-wallpaper-noisy-gray-light-and-white-color-small-random-spots-texture.jpg?fit=256%2C256&ssl=1";
	url: string;

	constructor() {}

	ngOnInit() {}
}
