import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "z751-View-new";
	constructor(private r: Router) {
		var xhttp = new XMLHttpRequest();
		var temp = document.location.pathname;

		xhttp.open(
			"GET",
			"http://27.71.234.45:8080/api/Common/getroute?url=" + temp,
			false
		);
		console.log('app component');
		
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
}
