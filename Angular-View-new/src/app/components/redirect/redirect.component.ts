import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { DOCUMENT } from "@angular/common";
import { RedirectSerivce } from "src/core/services/redirect.service";
import { HttpService } from "src/core/services/http.service";
import { HttpClient } from "@angular/common/http";

@Component({
	selector: "app-redirect",
	templateUrl: "./redirect.component.html",
	styleUrls: ["./redirect.component.scss"],
})
export class RedirectComponent implements OnInit {
	isLoading = true;

	constructor(
		private r: Router,
		@Inject(DOCUMENT) document: Document,
		private rService: RedirectSerivce,
		private http: HttpClient,
		private httpSvc: HttpService
	) {
		// Khi click chuyển trang
		console.log("On Redirect");
		var path = document.location.pathname;
		this.rService.getRouteNew(http, path).subscribe((response: any) => {
			if (response.data != null && response.code == 200) {
				path = this.rService.swithRoute(
					response.data.template,
					response.data.entityType
				);
			} else if (path == "/") {
				path = "index";
			} else {
				path = "error";
			}
			this.isLoading = false;
		});

		var interval = setInterval(() => {
			if (!this.isLoading) {
				clearInterval(interval);
				if (path != "/" && path != document.location.pathname) {
					this.rService.isRenderingSSR = false
					this.r.navigateByUrl(path, { skipLocationChange: true });
				}
			}
		}, 1000);
	}

	ngOnInit() {}

	
	getRoute(path) {
		return this.httpSvc.get("/api/Common/getroute?url=" + path);
	}
}
