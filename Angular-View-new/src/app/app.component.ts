import { Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DOCUMENT } from "@angular/common";
import { CookieService } from "src/core/services/cookie.service";
import { HttpService } from "src/core/services/http.service";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { ResourceModel } from "src/core/models/Resource.model";
import { ResponseModel } from "src/core/models/Response.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
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
		console.log("On Load");
		var interval = setInterval(() => {
			if (!this.rService.isRenderingSSR) {
				clearInterval(interval);
				console.log("SSR Rendering has been done!");
			}
		}, 300);
	}
	ngOnInit() {}
}
