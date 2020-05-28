import { Component, OnInit } from "@angular/core";
import { RedirectSerivce } from "src/core/services/redirect.service";
import { HttpService } from "src/core/services/http.service";
import { API } from "src/core/configs/api";
import {
	RouterOutlet,
	Router,
	RouterEvent,
	NavigationStart,
	NavigationEnd,
	NavigationCancel,
	NavigationError,
} from "@angular/router";
import { LanguageService } from "src/core/services/language.service";
import { LanguageModel } from "src/core/models/Language.model";
import { loading } from "./animation";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	animations: [loading],
})
export class AppComponent implements OnInit {
	isLoading = true;
	title = "z751";
	phone: string;
	loading = true;
	constructor(
		private rService: RedirectSerivce,
		private httpSvc: HttpService,
		private langSvc: LanguageService,
		private router: Router
	) {
		var interval = setInterval(() => {
			if (!this.rService.isRenderingSSR) {
				clearInterval(interval);
				this.loading = false;
			}
		}, 100);
	}

	ngOnInit() {
		this.getNumberPhone();
		this.getLanguages();

		this.router.events.subscribe((e: RouterEvent) => {
			this.navigationInterceptor(e);
		});
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

	prepareRoute(outlet: RouterOutlet) {
		return (
			outlet &&
			outlet.activatedRouteData &&
			outlet.activatedRouteData["animation"]
		);
	}

	// Shows and hides the loading spinner during RouterEvent changes
	navigationInterceptor(event: RouterEvent): void {
		if (event instanceof NavigationStart) {
			this.loading = true;
		}

		if (
			event.url &&
			this.rService.routes.indexOf(event.url.substr(1)) != -1
		) {
			if (
				event instanceof NavigationEnd ||
				// Set loading state to false in both of the below events to hide the spinner in case a request fails
				event instanceof NavigationCancel ||
				event instanceof NavigationError
			) {
				this.loading = false;
			}
		}
	}
}
