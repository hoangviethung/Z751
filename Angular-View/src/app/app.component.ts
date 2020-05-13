import { Component, OnInit, Inject, PLATFORM_ID } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";
import { DOCUMENT } from "@angular/common";

@Component({
	selector: "w4g-app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	title = "z751";

	constructor(
		private router: Router,
		public translate: TranslateService,
		@Inject(PLATFORM_ID) private platformId: Object,
		@Inject(DOCUMENT) private document: Document
	) {}

	ngOnInit() {
		this.detectRouteChange();
	}

	detectRouteChange() {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationStart) {
			}
			if (event instanceof NavigationEnd) {
			}
		});
	}
}
