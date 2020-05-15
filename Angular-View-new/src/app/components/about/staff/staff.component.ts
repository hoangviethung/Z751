import { Component, OnInit, Input } from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { HttpService, InputRequestOption } from "src/core/services/http.service";
import { ArticleModel } from "src/core/models/Article.model";
import { API } from "src/core/configs/api";

@Component({
	selector: "app-staff",
	templateUrl: "./staff.component.html",
	styleUrls: ["./staff.component.scss"],
})
export class StaffComponent implements OnInit {
	sliderStaff: SwiperConfigInterface = {
		slidesPerView: 4,
		loop: true,
		speed: 1200,
		spaceBetween: 15,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 2000,
		},
		breakpoints: {
			1025: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
		},
	};
	staffs: Array<ArticleModel>;

	@Input("language") currentLanguage;

	constructor(private httpSvc: HttpService) {}

	ngOnInit() {
		this.getListStaff();
	}

	getListStaff() {
		this.httpSvc.get(API.Section.Get).subscribe((result) => {
			this.staffs = result.data;
		});
	}
}
