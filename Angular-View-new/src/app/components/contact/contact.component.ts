import { Component, OnInit } from "@angular/core";
import { PageInfoService } from "src/core/services/page-info.service";
import { LanguageService } from "src/core/services/language.service";

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
		private languageSvc: LanguageService
	) {
		
	}

	ngOnInit() {
		this.pageInfoSvc.setTitle('Contact');
		this.breadcrumbs = this.Breadcrumb[this.currentLanguage];
	}
}
