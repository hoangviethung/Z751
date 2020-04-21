import { Component, OnInit } from "@angular/core";
import { PageInfoService } from "src/app/services/page-info.service";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "src/app/services/language.service";

@Component({
	selector: "app-index",
	templateUrl: "./index.component.html",
	styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
	currentLanguage: string;

	constructor(
		private pageInfoSvc: PageInfoService,
		private translateSvc: TranslateService,
		private languageSvc: LanguageService
	) {
		this.pageInfoSvc.setTitle(this.translateSvc.instant("menu.index"));
		this.currentLanguage = this.languageSvc.getCurrentLanguage();
	}

	ngOnInit() {
		console.log(this.currentLanguage);
		
	}
}
