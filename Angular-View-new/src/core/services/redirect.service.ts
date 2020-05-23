import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class RedirectSerivce {
	isRenderingSSR = true;

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
