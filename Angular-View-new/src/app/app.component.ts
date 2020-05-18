import { Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DOCUMENT } from "@angular/common";
import { CookieService } from "src/core/services/cookie.service";
import { HttpService } from "src/core/services/http.service";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { ResourceModel } from "src/core/models/Resource.model";
import { ResponseModel } from "src/core/models/Response.model";
import { Observable } from "rxjs";

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
		private httpSvc: HttpService,
		private http: HttpClient
	) {
		var xhttp = new XMLHttpRequest();
		var temp = document.location.pathname;
		this.cookieSvc.get("currentLanguage");

		xhttp.open(
			"GET",
			"http://27.71.234.45:8080/api/Common/getroute?url=" + temp,
			false
		);

		xhttp.onreadystatechange = function () {
			if (
				this.readyState == 4 &&
				this.status == 200 &&
				JSON.parse(xhttp.responseText).data != null
			) {
				switch (JSON.parse(xhttp.responseText).data.template) {
					case 1:
						temp = "";
						return;
					case 2:
						temp = "about";
						return;
					case 3:
						temp = "products";
						return;
					case 4:
						temp = "departments";
						return;
					case 5:
						temp = "capacities";
						return;
					case 6:
						temp = "news";
						return;
					case 7:
						temp = "contact";
						return;
					default:
						return;
				}
			}
		};
		xhttp.send();

		if (temp != "/") {
			this.r.navigateByUrl(temp, { skipLocationChange: true });
		}
	}
	ngOnInit() {
		this.getResourceKey();
	}

	getResourceKey() {
		this.http
			.get<Observable<Array<any>>>(
				"http://27.71.234.45:8080/assets/vi.json"
			)
			.subscribe((response) => {
				response.map((item, index) => {
					console.log(item);
				});
			});
		this.http
			.get("http://27.71.234.45:8080/assets/en.json")
			.subscribe((response) => {});
	}
}
