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
		var path = this.rService.getRoute(document.location.pathname);
		console.log(path)
		if (path != "/") {
			this.r.navigateByUrl(path, { skipLocationChange: true });
		}

		// this.r.navigateByUrl("index", { skipLocationChange: true });
		// var path = encodeURIComponent(document.location.pathname);
		// if (path != "/") {
		// 	this.http.get("http://27.71.234.45:8080/api/Common/getroute?url=" + path).subscribe((response : any) => {
		// 		if (response.data != null) {
		// 			path = this.rService.swithRoute(response.data.template, response.data.entityType);
		// 			console.log(path);

		// 			if (path != "/") {
		// 				this.r.navigateByUrl(path, { skipLocationChange: true });
		// 			}
		// 		}
		// 	});
		// }
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
