import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { PageInfoService } from "src/app/services/page-info.service";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "src/app/services/language.service";

@Component({
	selector: "app-activities-image",
	templateUrl: "./activities-image.component.html",
	styleUrls: ["./activities-image.component.scss"],
})
export class ActivitiesImageComponent implements OnInit {
	images = [];
	list = [];
	popupShow = false;
	currentLanguage: string;
	breadcrumbObject = {
		en: ["Home", "Images"],
		vi: ["Trang chủ", "Hình ảnh"],
	};

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		private translateSvc: TranslateService,
		private languageSvc: LanguageService
	) {
		this.currentLanguage = this.languageSvc.getCurrentLanguage();
	}

	ngOnInit() {
		this.pageInfoSvc.setTitle(this.translateSvc.instant("menu.images"));
		this.getImages();
	}

	getImages() {
		this.httpSvc
			.get(`assets/api/${this.currentLanguage}/activities-images.json`)
			.subscribe((result) => {
				this.images = result.Data;
			});
	}

	getImageListPopup(list) {
		this.list = list;
		this.popupShow = true;
	}

	closePopup(event) {
		this.popupShow = event;
	}
}
