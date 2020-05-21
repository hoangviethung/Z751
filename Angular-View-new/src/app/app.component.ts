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
import { RedirectSerivce } from 'src/core/services/redirect.service';

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	isLoading = true;
	title = "z751-View-new";
	constructor(
		private r: Router,
		@Inject(DOCUMENT) document: Document,
		private cookieSvc: CookieService,
		private http: HttpClient,
		private rService: RedirectSerivce,
	) {
		this.cookieSvc.get("currentLanguage");
		console.log("On Load")
		var interval = setInterval(() => {
			if (!this.rService.isRenderingSSR) {
				clearInterval(interval)
				console.log("SSR Rendering has been done!")
			}
		}, 300);
	}
	ngOnInit() {
		// this.getResourceKey();
	}

	getResourceKey() {
		this.http
			.get<Observable<Array<any>>>(
				"http://27.71.234.45:8080/assets/vi.json"
			)
			.subscribe((response) => {
				// response.map((item, index) => {
				// 	console.log(item);
				// });
			});
		this.http
			.get("http://27.71.234.45:8080/assets/en.json")
			.subscribe((response) => {});
	}
}
