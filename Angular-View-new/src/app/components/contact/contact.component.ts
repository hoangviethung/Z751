import { Component, OnInit } from "@angular/core";
import { PageInfoService } from "src/core/services/page-info.service";
import { LanguageService } from "src/core/services/language.service";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { API } from "src/core/configs/api";
import { BranchModel } from "src/core/models/Branch.model";
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
	listAddress: Array<BranchModel>
	constructor(
		private pageInfoSvc: PageInfoService,
		private languageSvc: LanguageService,
		private httpSvc: HttpService
	) {}

	ngOnInit() {
		this.pageInfoSvc.setTitle("Contact");
		this.httpSvc.get(API.Branch.Gets).subscribe((result) => {
			console.log(result.data.items);
			this.listAddress = result.data.items
		});
		this.breadcrumbs = this.Breadcrumb[this.currentLanguage];
	}
}
