import { Component, OnInit } from "@angular/core";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { API } from "src/core/configs/api";
import { response } from "express";
import { map } from "rxjs/operators";
import { SectionModel } from "src/core/models/Section.model";
import { Image } from "src/core/models/Image.model";

@Component({
	selector: "app-index-about-us",
	templateUrl: "./index-about-us.component.html",
	styleUrls: ["./index-about-us.component.scss"],
})
export class IndexAboutUsComponent implements OnInit {
	constructor(private httpSvc: HttpService) {}
	indexAbout: SectionModel;
	indexCoreValues: SectionModel;
	defaultImage = "./assets/images/preload.jpg";
	ngOnInit() {
		this.getContentTemplate_6();
		this.getContentTemplate_7();
	}

	getContentTemplate_6() {
		const option = new InputRequestOption();
		option.params = {
			template: "6",
		};
		this.httpSvc.get(API.Section.Get, option).subscribe((response) => {
			this.indexAbout = response.data;
		});
	}

	getContentTemplate_7() {
		const option = new InputRequestOption();
		option.params = {
			template: "7",
		};
		this.httpSvc.get(API.Section.Get, option).subscribe((content) => {
			this.indexCoreValues = content.data;
		});
	}
}
