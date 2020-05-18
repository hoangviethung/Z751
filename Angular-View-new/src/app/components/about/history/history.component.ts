import { Component, OnInit, Input } from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { ArticleModel } from "src/core/models/Article.model";
import { API } from "src/core/configs/api";
@Component({
	selector: "app-history",
	templateUrl: "./history.component.html",
	styleUrls: ["./history.component.scss"],
})
export class HistoryComponent implements OnInit {
	sliderHistoryConfig: SwiperConfigInterface = {
		slidesPerView: 4,
		loop: true,
		speed: 1200,
		spaceBetween: 80,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: ".timeline .swiper-button-next",
			prevEl: ".timeline .swiper-button-prev",
		},
		breakpoints: {
			1025: {
				slidesPerView: 3,
				spaceBetween: 60,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
		},
	};

	yearImages = [];
	year: ArticleModel

	@Input("language") currentLanguage;

	constructor(private httpSvc: HttpService) {}

	ngOnInit() {
		this.getListTimeLine();
	}

	getListTimeLine() {
		const opts = new InputRequestOption();
		opts.params = {
			template: "2",
		};
		this.httpSvc.get(API.Section.Get, opts)
		.subscribe((response) => {
			this.yearImages = response.data.images;
			console.log(this.yearImages);
		});
	}
}
