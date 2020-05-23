import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { CookieService } from "src/core/services/cookie.service";
import { RedirectSerivce } from "src/core/services/redirect.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	isLoading = true;
	title = "z751-View-new";
	constructor(
		private cookieSvc: CookieService,
		private rService: RedirectSerivce
	) {
		this.cookieSvc.get("currentLanguage");
		var interval = setInterval(() => {
			if (!this.rService.isRenderingSSR) {
				clearInterval(interval);
			}
		}, 300);
	}
	ngOnInit() {}
}
