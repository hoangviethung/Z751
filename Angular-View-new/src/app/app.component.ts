import { Component, OnInit } from "@angular/core";
import { RedirectSerivce } from "src/core/services/redirect.service";
import { HttpService } from "src/core/services/http.service";
import { API } from "src/core/configs/api";
import { RouterOutlet } from "@angular/router";
import { LanguageService } from "src/core/services/language.service";
import { LanguageModel } from "src/core/models/Language.model";
import { slideInAnimation } from "./animation";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
	isLoading = true;
	title = "z751";
	phone: string;

	constructor(
		private rService: RedirectSerivce,
		private httpSvc: HttpService,
		private langSvc: LanguageService
	) {
		var interval = setInterval(() => {
			if (!this.rService.isRenderingSSR) {
				clearInterval(interval);
			}
		}, 300);
	}

	ngOnInit() {
		this.getNumberPhone();
		this.getLanguages();
	}

	getNumberPhone() {
		this.httpSvc.get(API.Branch.Gets).subscribe((response) => {
			const item = response.data.items.find((element, index) => {
				if (element.order == 1) {
					return element;
				}
			});
			this.phone = item.phone;
		});
	}

	prepareRoute(outlet: RouterOutlet) {
		return (
			outlet &&
			outlet.activatedRouteData &&
			outlet.activatedRouteData["animation"]
		);
	}

	getLanguages() {
		this.langSvc.getLanguages().subscribe((response) => {
			const languages = response.data.map((item: LanguageModel) => {
				if (item.isDefault) {
					this.langSvc.setCurrentLanguage(item.key);
				}
				return item;
			});
			this.langSvc.setLanguages(languages);
		});
	}
}
