import { Component, OnInit, Input } from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { ArticleModel } from "src/core/models/Article.model";
import { API } from "src/core/configs/api";

@Component({
	selector: "app-staff",
	templateUrl: "./staff.component.html",
	styleUrls: ["./staff.component.scss"],
})
export class StaffComponent implements OnInit {
	sliderStaff: SwiperConfigInterface = {
		slidesPerView: 2,
		loop: true,
		speed: 1200,
		spaceBetween: 15,
		observer: true,
		observeParents: true,
		// Disable preloading of all images
		preloadImages: false,
		// Enable lazy loading
		lazy: true,
		autoplay: {
			delay: 2000,
		},
		breakpoints: {
			1025: {
				slidesPerView: 4,
			},
			768: {
				slidesPerView: 3,
			},
		},
	};
	staff: ArticleModel;
	staffImages = [];

	@Input("language") currentLanguage;

	constructor(private httpSvc: HttpService) {}

	ngOnInit() {
		this.getListStaff();
	}

	getListStaff() {
		const opts = new InputRequestOption();
		opts.params = {
			template: "3",
		};
		this.httpSvc.get(API.Section.Get, opts).subscribe((result) => {
			this.staff = result.data;
			this.staffImages = result.data.images;
		});
	}
}
