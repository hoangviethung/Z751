import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/core/services/http.service";
import { API } from "src/core/configs/api";

@Component({
	selector: "app-index-about-us",
	templateUrl: "./index-about-us.component.html",
	styleUrls: ["./index-about-us.component.scss"],
})
export class IndexAboutUsComponent implements OnInit {
	constructor(private HttpSvc: HttpService) {}

	ngOnInit() {}

	getContent() {
		this.HttpSvc.get(API.Section.Get);
	}
}
