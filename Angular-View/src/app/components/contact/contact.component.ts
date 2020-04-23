import { Component, OnInit } from "@angular/core";
import { PageInfoService } from "src/app/services/page-info.service";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "src/app/services/language.service";

@Component({
	selector: "app-contact",
	templateUrl: "./contact.component.html",
	styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
	Breadcrumb = {
		en: ["Home", "Contact Us"],
		vi: ["Trang chủ", "Liên hệ"],
	};
	breadcrumbs;
	currentLanguage;

	constructor(
		private pageInfoSvc: PageInfoService,
		private translateSvc: TranslateService,
		private languageSvc: LanguageService
	) {
		this.currentLanguage = this.languageSvc.getCurrentLanguage();
	}

	ngOnInit() {
		this.pageInfoSvc.setTitle(this.translateSvc.instant("menu.contact"));
		this.breadcrumbs = this.Breadcrumb[this.currentLanguage];
	}
}
