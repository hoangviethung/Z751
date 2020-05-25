import { Component, OnInit, Input } from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { ArticleModel } from "src/core/models/Article.model";
import { API } from "src/core/configs/api";
@Component({
	selector: "app-reward",
	templateUrl: "./reward.component.html",
	styleUrls: ["./reward.component.scss"],
})
export class RewardComponent implements OnInit {
	sliderRewardConfig: SwiperConfigInterface = {
		slidesPerView: 1,
		loop: true,
		speed: 1200,
		spaceBetween: 55,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 2000,
		},
		navigation: {
			nextEl: ".slider-reward .swiper-button-next",
			prevEl: ".slider-reward .swiper-button-prev",
		},
		breakpoints: {
			1025: {
				spaceBetween: 30,
				slidesPerView: 3
			},
			768: {
				spaceBetween: 15,
				slidesPerView: 2,
			},
		},
	};

	reward: ArticleModel;
	rewardImages = [];
	@Input("language") currentLanguage;

	constructor(private httpSvc: HttpService) {}

	ngOnInit() {
		this.getListReward();
	}

	getListReward() {
		// GIẢI THƯƠNG VÀ THÀNH TỰU
		const opts = new InputRequestOption();
		opts.params = {
			template: "5",
		};
		this.httpSvc.get(API.Section.Get, opts)
			.subscribe((result) => {
				this.reward = result.data;
				this.rewardImages = result.data.images;
			});
	}
}
