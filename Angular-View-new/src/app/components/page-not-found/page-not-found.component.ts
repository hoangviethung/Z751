import { Component, OnInit } from "@angular/core";
import { PageInfoService } from "src/core/services/page-info.service";

@Component({
	selector: "app-page-not-found",
	templateUrl: "./page-not-found.component.html",
	styleUrls: ["./page-not-found.component.scss"],
})
export class PageNotFoundComponent implements OnInit {
	constructor(private pageInfoSvc: PageInfoService) {
		this.pageInfoSvc.setTitle('Page not found');
	}

	ngOnInit() {}
}
