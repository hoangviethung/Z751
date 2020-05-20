import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class RedirectSerivce {
	getRoute(url: string) {
		var xhttp = new XMLHttpRequest();
		if (url != "/") {
			xhttp.open(
				"GET",
				"http://27.71.234.45:8080/api/Common/getroute?url=" + url
			);
			xhttp.onreadystatechange = function () {
				if (
					this.readyState == 4 &&
					this.status == 200 &&
					JSON.parse(xhttp.responseText).data != null
				) {
					console.log("Xhttp Done");
				}
			};
			xhttp.send();

			if (xhttp.readyState == 4) {
				return url;
			}
		}

		return "index";
	}

	swithRoute(template: number, entityType?: number): string {
		switch (template) {
			case 0:
				if (entityType == 18) {
					return "product-detail";
				}
				if (entityType == 18) {
					return "product-detail";
				}
			case 1:
				return "index";
			case 2:
				return "about";
			case 3:
				return "products";
			case 4:
				return "departments";
			case 5:
				return "capacities";
			case 6:
				return "news";
			case 7:
				return "contact";
		}

		return "error";
	}
}
