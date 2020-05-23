import { Component, OnInit, Inject } from "@angular/core";
import {
	PageInfoService,
	MetaModel,
} from "src/core/services/page-info.service";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { API } from "src/core/configs/api";
import { BranchModel } from "src/core/models/Branch.model";
import { DOCUMENT } from "@angular/common";
@Component({
	selector: "app-contact",
	templateUrl: "./contact.component.html",
	styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
	breadcrumbs;
	currentLanguage;
	listAddress: Array<BranchModel>;
	constructor(
		private pageInfoSvc: PageInfoService,
		private httpSvc: HttpService,
		@Inject(DOCUMENT) private document: Document
	) {}

	ngOnInit() {
		const opts = new InputRequestOption();
		opts.params = {
			url: this.document.location.pathname,
		};
		this.setPageInformation(opts);
	}

	setPageInformation(opts) {
		this.httpSvc.get(API.Category.Get, opts).subscribe((response) => {
			const metaObject: MetaModel = {
				title: response.data.metaTitle,
				keywords: response.data.metaKeywords,
				description: response.data.metaDescription,
				image: response.data.metaImage,
			};
			this.pageInfoSvc.setTitle(response.data.title);
			this.pageInfoSvc.setMeta(metaObject);
		});

		this.httpSvc.get(API.Common.Breadcrumb, opts).subscribe((response) => {
			this.breadcrumbs = response.data;
		});
	}
}
