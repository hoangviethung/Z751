import { Component, OnInit, Inject } from "@angular/core";
import { Router, RouterEvent, NavigationEnd } from "@angular/router";
import { DOCUMENT } from "@angular/common";
import { filter } from "rxjs/operators";
import { RedirectSerivce } from "src/core/services/redirect.service";
import { HttpService } from "src/core/services/http.service";
import { HttpClient } from '@angular/common/http';

@Component({
	selector: "app-redirect",
	templateUrl: "./redirect.component.html",
	styleUrls: ["./redirect.component.scss"],
})
export class RedirectComponent implements OnInit {
	constructor(
		private r: Router,
		@Inject(DOCUMENT) document: Document,
		private rService: RedirectSerivce,
		private http: HttpClient,
		private httpSvc: HttpService
	) {
		// Khi click chuyển trang
		console.log("On Redirect")
		var path = this.rService.getRoute(document.location.pathname);
		console.log(path)
		if (path != "/") {
			this.r.navigateByUrl(path, { skipLocationChange: true });
		}
		// this.r.navigateByUrl("index", { skipLocationChange: true });
		// console.log("click");
		// var isNavigate = false;
		// var path = encodeURIComponent(document.location.pathname);
		// console.log(path);
		// this.getRoute(path).subscribe((response : any) => {
		// 	if (response.data != null) {
		// 		path = this.rService.swithRoute(response.data.template);
		// 		if (path != "/") {
		// 			isNavigate = true;
		// 			this.r.navigateByUrl(path, { skipLocationChange: true });
		// 		}
		// 	}
		// });

		// if (!isNavigate) {
		// 	this.r.navigateByUrl("index", { skipLocationChange: true });
		// }
	}

	ngOnInit() {}

	getRoute(path) {
		return this.httpSvc.get("/api/Common/getroute?url=" + path);
	}
}
