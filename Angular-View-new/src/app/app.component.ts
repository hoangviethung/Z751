import { Component, Inject, OnInit } from "@angular/core";
import { CookieService } from "src/core/services/cookie.service";
import { RedirectSerivce } from "src/core/services/redirect.service";
import { HttpService } from "src/core/services/http.service";
import { HttpClient } from "@angular/common/http";
import { API } from "src/core/configs/api";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	isLoading = true;
	title = "z751-View-new";
	phone: string;
	constructor(
		private rService: RedirectSerivce,
		private httpSvc: HttpService
	) {
		var interval = setInterval(() => {
			if (!this.rService.isRenderingSSR) {
				clearInterval(interval);
			}
		}, 300);
	}
	ngOnInit() {
		this.getNumberPhone();
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
}
