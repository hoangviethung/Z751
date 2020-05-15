import { Component, OnInit, Inject } from "@angular/core";
import { Router, RouterEvent, NavigationEnd } from "@angular/router";
import { DOCUMENT } from "@angular/common";
import { filter } from "rxjs/operators";

@Component({
	selector: "app-redirect",
	templateUrl: "./redirect.component.html",
	styleUrls: ["./redirect.component.scss"],
})
export class RedirectComponent implements OnInit {
	constructor(private r: Router, @Inject(DOCUMENT) document: Document) {
		console.log(1);
		// Khi click chuyển trang
		var xhttp = new XMLHttpRequest();
		var temp = document.location.pathname;

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
						temp = "index";
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
			} else {
				temp = "index";
			}
		};
		xhttp.send();

		if (temp != "/") {
			this.r.navigateByUrl(temp, { skipLocationChange: true });
		} else {
			this.r.navigateByUrl("/", { skipLocationChange: true });
		}
	}

	ngOnInit() {}
}
