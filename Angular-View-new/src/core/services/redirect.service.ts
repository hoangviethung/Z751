import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class RedirectSerivce {
	isRenderingSSR = true;

	getRoute(path: string) {
		var xhttp = new XMLHttpRequest();
		xhttp.open(
			"GET",
			"http://27.71.234.45:8080/api/Common/getroute?url=" +
				encodeURIComponent(path)
			// , false
		);

		xhttp.onreadystatechange = () => {
			if (
				xhttp.readyState == 4 &&
				xhttp.status == 200 &&
				JSON.parse(xhttp.responseText).data != null
			) {
				var data = JSON.parse(xhttp.responseText).data;
				path = this.swithRoute(data.template, data.entityType);
			} else {
				path = "index";
			}
		};
		xhttp.send();

		var interval = setInterval(() => {
			console.log(xhttp.readyState);
			if (xhttp.readyState == 4) {
				clearInterval(interval);
			}
		}, 5000);

		console.log("inService " + path);
		return path;
	}

	getRouteNew(httpS: HttpClient, path: string) {
		return httpS.get(
			"http://27.71.234.45:8080/api/Common/getroute?url=" +
				encodeURIComponent(path)
		);
	}

	swithRoute(template: number, entityType?: number): string {
		switch (template) {
			case 0:
				if (entityType == 18) {
					return "product-detail";
				}
				if (entityType == 2) {
					return "news-detail";
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
			default:
				return "error";
		}
	}
}
