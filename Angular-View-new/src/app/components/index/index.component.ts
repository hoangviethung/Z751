import { Component, OnInit } from "@angular/core";
import { PageInfoService } from "../../../core/services/page-info.service";

@Component({
	selector: "app-index",
	templateUrl: "./index.component.html",
	styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
	constructor(private pageInfoSvc: PageInfoService) {
		this.pageInfoSvc.setTitle("Trang chủ");
	}

	ngOnInit() {}
}
